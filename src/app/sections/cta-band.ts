import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, PHONE_LINK, whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-cta-band',
  imports: [Icon, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta-band">
      <div class="container cta-band__inner">
        <div>
          <h2>{{ heading() }}</h2>
          <p>Call or WhatsApp us for the latest price and delivery in Baripada &amp; Mayurbhanj.</p>
        </div>
        <div class="cta-band__actions">
          <a class="btn btn--light" [href]="phoneLink"><app-icon name="phone" /> {{ business.phoneDisplay }}</a>
          <a class="btn btn--whatsapp" [href]="wa" target="_blank" rel="noopener"><app-icon name="whatsapp" /> WhatsApp</a>
          <a class="btn btn--outline-light" routerLink="/contact">Send Enquiry</a>
        </div>
      </div>
    </section>
  `,
})
export class CtaBand {
  readonly heading = input('Get the best price for your project');
  protected readonly business = BUSINESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly wa = whatsappLink();
}
