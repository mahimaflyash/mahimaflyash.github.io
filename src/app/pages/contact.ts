import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BUSINESS, EMAIL_LINK, FULL_ADDRESS, PHONE_LINK, whatsappLink } from '../data/site-data';
import { EnquiryForm } from '../sections/enquiry-form';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';

@Component({
  selector: 'app-contact',
  imports: [PageHero, Icon, EnquiryForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Contact us"
      heading="Get in touch for prices & delivery"
      text="Call, WhatsApp, email or send an enquiry. We usually reply the same day."
    />

    <section class="section">
      <div class="container contact">
        <div class="contact__info">
          <a class="contact-card card" [href]="phoneLink">
            <span class="feature__icon"><app-icon name="phone" [size]="24" /></span>
            <span><strong>Call us</strong>{{ business.phoneDisplay }}</span>
          </a>
          <a class="contact-card card" [href]="wa" target="_blank" rel="noopener">
            <span class="feature__icon feature__icon--wa"><app-icon name="whatsapp" [size]="24" /></span>
            <span><strong>WhatsApp</strong>{{ business.phoneDisplay }}</span>
          </a>
          <a class="contact-card card" [href]="emailLink">
            <span class="feature__icon"><app-icon name="mail" [size]="24" /></span>
            <span><strong>Email</strong>{{ business.email }}</span>
          </a>
          <a class="contact-card card" [href]="business.mapLink" target="_blank" rel="noopener">
            <span class="feature__icon"><app-icon name="pin" [size]="24" /></span>
            <span><strong>Visit our plant</strong>{{ address }}</span>
          </a>
          <div class="contact-card card">
            <span class="feature__icon"><app-icon name="clock" [size]="24" /></span>
            <span><strong>Working hours</strong>{{ business.hours }}</span>
          </div>
          <div class="contact-card card">
            <span class="feature__icon"><app-icon name="truck" [size]="24" /></span>
            <span><strong>We deliver to</strong>{{ business.serviceArea.join(', ') }}</span>
          </div>
          @if (business.gstin) {
            <div class="contact-card card">
              <span class="feature__icon"><app-icon name="shield" [size]="24" /></span>
              <span><strong>GSTIN</strong>{{ business.gstin }}</span>
            </div>
          }
        </div>

        <div class="card contact__form">
          <h2>Send an enquiry</h2>
          <p class="muted">Fill in your details and we will get back to you with the price.</p>
          <app-enquiry-form />
        </div>
      </div>
    </section>

    <section class="map">
      <iframe
        [src]="mapUrl"
        title="Mahima Fly Ash Bricks location on Google Maps"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
      <a class="btn btn--primary map__btn" [href]="business.mapLink" target="_blank" rel="noopener">
        <app-icon name="pin" /> Get Directions
      </a>
    </section>
  `,
})
export class Contact {
  protected readonly business = BUSINESS;
  protected readonly address = FULL_ADDRESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly emailLink = EMAIL_LINK;
  protected readonly wa = whatsappLink();
  // Fixed, trusted Google Maps embed URL from site-data.ts
  protected readonly mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(BUSINESS.mapEmbed);
}
