import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BUSINESS, EMAIL_LINK, FULL_ADDRESS, PHONE_LINK } from '../data/site-data';
import { PageHero } from '../shared/page-hero';

@Component({
  selector: 'app-privacy',
  imports: [PageHero],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero eyebrow="Legal" heading="Privacy Policy" [text]="'Last updated: ' + updated" />

    <section class="section">
      <div class="container container--narrow prose">
        <p>
          This website is run by {{ business.name }}, {{ address }}. This page explains what information we collect
          through this website and how we use it.
        </p>

        <h2>Information we collect</h2>
        <p>
          When you send an enquiry, we receive the details you type in the form: your name, phone number and,
          if you choose to give them, your email, product, quantity, site location and message. If you call,
          WhatsApp or email us, we receive your phone number or email address and what you send.
        </p>
        <p>We do not use analytics or advertising trackers, and we do not ask you to create an account.</p>

        <h2>How we use it</h2>
        <p>
          We use your details only to reply to your enquiry, share prices and arrange delivery. We do not sell,
          rent or share your details with anyone for marketing.
        </p>

        <h2>Services we use</h2>
        <ul>
          <li>
            <strong>Web3Forms</strong> delivers enquiry form messages to our email inbox.
          </li>
          <li><strong>Google Maps</strong> shows our location on the Contact page.</li>
          <li><strong>Google Fonts</strong> provides the fonts on this website.</li>
          <li><strong>WhatsApp</strong> is used if you choose to message us there.</li>
          <li><strong>GitHub Pages</strong> hosts this website.</li>
        </ul>
        <p>
          These services may receive technical information such as your IP address and browser type, and handle it
          under their own privacy policies.
        </p>

        <h2>How long we keep it</h2>
        <p>We keep enquiry messages only as long as needed to serve you and for our normal business records.</p>

        <h2>Your choices</h2>
        <p>
          You can ask us to see, correct or delete the details you sent us. Contact us at
          <a [href]="emailLink">{{ business.email }}</a> or <a [href]="phoneLink">{{ business.phoneDisplay }}</a>.
        </p>

        <h2>Changes</h2>
        <p>If we change this policy, we will update this page and the date above.</p>
      </div>
    </section>
  `,
})
export class Privacy {
  protected readonly business = BUSINESS;
  protected readonly address = FULL_ADDRESS;
  protected readonly emailLink = EMAIL_LINK;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly updated = '26 November 2026';
}
