import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS } from '../data/site-data';
import { CtaBand } from '../sections/cta-band';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';
import { Photo } from '../shared/photo';

@Component({
  selector: 'app-about',
  imports: [PageHero, Photo, Icon, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="About us"
      [heading]="'Building Mayurbhanj for over ' + business.yearsInBusiness + ' years'"
      text="A family-run manufacturer of fly ash bricks and precast cement products in Baripada."
    />

    <section class="section">
      <div class="container split">
        <div>
          <h2>Our story</h2>
          <p>
            {{ business.name }} was started by <strong>{{ business.owner }}</strong> with a simple goal: to give
            local builders and families strong, affordable and eco-friendly building materials made right here in
            Baripada.
          </p>
          <p>
            Over the past {{ business.yearsInBusiness }} years we have grown from a small unit into a trusted name
            across Mayurbhanj district. Today we make fly ash bricks, sky lights, boundary slabs,
            cement pillars and Tulsi Chaura at our plant on Udala - Baripada Road, Podastia.
          </p>
          <p>
            Many of our customers have been with us for years, and most new customers come to us through word of
            mouth. We are proud of that trust and work every day to keep it.
          </p>
        </div>
        <app-photo src="images/about/plant-podastia.jpg" alt="Our plant at Podastia, Baripada" />
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <div class="grid grid--3">
          @for (v of values; track v.title) {
            <div class="card feature">
              <span class="feature__icon"><app-icon [name]="v.icon" [size]="28" /></span>
              <h3>{{ v.title }}</h3>
              <p>{{ v.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split split--center">
        <div class="owner-card card">
          <div class="owner-card__avatar" aria-hidden="true">{{ initials }}</div>
          <div>
            <h3>{{ business.owner }}</h3>
            <p class="muted">Founder &amp; Owner</p>
          </div>
        </div>
        <div>
          <h2>A message from the owner</h2>
          <p>
            “Every brick that leaves our plant carries our name. For {{ business.yearsInBusiness }} years we have
            focused on honest prices, good quality and keeping our promises on delivery. Visit our plant any day
            between {{ business.hoursShort }} — you are always welcome.”
          </p>
        </div>
      </div>
    </section>

    <app-cta-band />
  `,
})
export class About {
  protected readonly business = BUSINESS;
  protected readonly initials = BUSINESS.owner
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  protected readonly values = [
    { icon: 'shield', title: 'Quality first', text: 'Careful mixing, pressing and water-curing for consistent, strong products.' },
    { icon: 'rupee', title: 'Fair prices', text: 'Factory-direct prices with no middlemen, for every order size.' },
    { icon: 'truck', title: 'Reliable delivery', text: 'Delivery to your site across Baripada and Mayurbhanj district.' },
  ];
}
