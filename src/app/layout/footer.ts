import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, EMAIL_LINK, FULL_ADDRESS, PHONE_LINK, PRODUCTS, whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';
import { Logo } from '../shared/logo';
import { NAV_LINKS } from './header';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <app-logo [light]="true" />
          <p class="footer__about">
            Manufacturer of fly ash bricks, solid blocks and precast cement products in Baripada for over
            {{ business.yearsInBusiness }} years.
          </p>
          <p class="footer__tagline">{{ business.tagline }}</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            @for (l of links; track l.path) {
              <li><a [routerLink]="l.path">{{ l.label }}</a></li>
            }
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
            @for (p of products; track p.id) {
              <li><a routerLink="/products" [fragment]="p.id">{{ p.name }}</a></li>
            }
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul class="footer__contact">
            <li><app-icon name="pin" [size]="18" /><a [href]="business.mapLink" target="_blank" rel="noopener">{{ address }}</a></li>
            <li><app-icon name="phone" [size]="18" /><a [href]="phoneLink">{{ business.phoneDisplay }}</a></li>
            <li><app-icon name="whatsapp" [size]="18" /><a [href]="wa" target="_blank" rel="noopener">WhatsApp us</a></li>
            <li><app-icon name="mail" [size]="18" /><a [href]="emailLink">{{ business.email }}</a></li>
            <li><app-icon name="clock" [size]="18" /><span>{{ business.hours }}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">© {{ year }} {{ business.name }}. All rights reserved.</div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly business = BUSINESS;
  protected readonly links = NAV_LINKS;
  protected readonly products = PRODUCTS;
  protected readonly address = FULL_ADDRESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly emailLink = EMAIL_LINK;
  protected readonly wa = whatsappLink();
  protected readonly year = new Date().getFullYear();
}
