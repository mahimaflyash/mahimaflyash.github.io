import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BUSINESS, PRODUCTS, whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Enquiry form. Sends the details to the business email through
 * Web3Forms (client-side, no backend). Set the access key in site-data.ts.
 */
@Component({
  selector: 'app-enquiry-form',
  imports: [ReactiveFormsModule, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './enquiry-form.html',
})
export class EnquiryForm {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly products = PRODUCTS;
  protected readonly status = signal<Status>('idle');
  protected readonly errorMessage = signal('');

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d][\d\s-]{9,14}$/)]],
    email: ['', [Validators.email]],
    product: [''],
    quantity: [''],
    location: [''],
    message: ['', [Validators.maxLength(1000)]],
    botcheck: [false], // honeypot — real users never tick this hidden box
  });

  protected invalid(name: 'name' | 'phone' | 'email'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  protected whatsappFallback(): string {
    const v = this.form.getRawValue();
    const lines = [
      `Enquiry from website`,
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      v.product && `Product: ${v.product}`,
      v.quantity && `Quantity: ${v.quantity}`,
      v.location && `Site location: ${v.location}`,
      v.message && `Message: ${v.message}`,
    ].filter(Boolean);
    return whatsappLink(lines.join('\n'));
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    if (v.botcheck) return;

    if (!BUSINESS.web3formsAccessKey || BUSINESS.web3formsAccessKey.startsWith('YOUR_')) {
      this.status.set('error');
      this.errorMessage.set(
        'Email enquiries are not set up yet. Please send your enquiry on WhatsApp instead.',
      );
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: BUSINESS.web3formsAccessKey,
          subject: `New enquiry from ${v.name} — ${BUSINESS.name} website`,
          from_name: `${BUSINESS.name} Website`,
          name: v.name,
          phone: v.phone,
          email: v.email || undefined,
          product: v.product || 'Not specified',
          quantity: v.quantity || 'Not specified',
          location: v.location || 'Not specified',
          message: v.message || '-',
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) throw new Error(data.message || 'Could not send');
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
      this.errorMessage.set(
        'Sorry, your enquiry could not be sent right now. Please call us or send it on WhatsApp.',
      );
    }
  }
}
