import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PHONE_LINK, whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';

/** Floating WhatsApp + Call buttons, always visible. */
@Component({
  selector: 'app-floating-actions',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fab">
      <a class="fab__btn fab__btn--call" [href]="phoneLink" aria-label="Call us">
        <app-icon name="phone" [size]="24" />
      </a>
      <a class="fab__btn fab__btn--wa" [href]="wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <app-icon name="whatsapp" [size]="30" />
      </a>
    </div>
  `,
})
export class FloatingActions {
  protected readonly phoneLink = PHONE_LINK;
  protected readonly wa = whatsappLink();
}
