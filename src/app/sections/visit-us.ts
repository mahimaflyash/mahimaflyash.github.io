import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BUSINESS, EMAIL_LINK, FULL_ADDRESS, PHONE_LINK } from '../data/site-data';
import { Icon } from '../shared/icon';

/** Address, hours, phone, email and an embedded Google Map (home page). */
@Component({
  selector: 'app-visit-us',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container split split--center">
        <div>
          <p class="eyebrow">Visit us</p>
          <h2>Our plant in Podastia, Baripada</h2>
          <ul class="visit-list">
            <li><app-icon name="pin" /><span><strong>Address</strong>{{ address }}</span></li>
            <li><app-icon name="clock" /><span><strong>Hours</strong>{{ business.hours }}</span></li>
            <li>
              <app-icon name="phone" /><span><strong>Phone</strong><a [href]="phoneLink">{{ business.phoneDisplay }}</a></span>
            </li>
            <li>
              <app-icon name="mail" /><span><strong>Email</strong><a [href]="emailLink">{{ business.email }}</a></span>
            </li>
            @if (business.gstin) {
              <li><app-icon name="shield" /><span><strong>GSTIN</strong>{{ business.gstin }}</span></li>
            }
          </ul>
          <a class="btn btn--primary" [href]="business.mapLink" target="_blank" rel="noopener">
            <app-icon name="pin" /> Get Directions
          </a>
        </div>
        <div class="visit-map card">
          <iframe
            [src]="mapUrl"
            title="Mahima Fly Ash Bricks on Google Maps"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  `,
})
export class VisitUs {
  protected readonly business = BUSINESS;
  protected readonly address = FULL_ADDRESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly emailLink = EMAIL_LINK;
  // Fixed, trusted Google Maps embed URL from site-data.ts
  protected readonly mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(BUSINESS.mapEmbed);
}
