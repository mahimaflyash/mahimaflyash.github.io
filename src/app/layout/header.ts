import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BUSINESS, PHONE_LINK } from '../data/site-data';
import { Icon } from '../shared/icon';
import { Logo } from '../shared/logo';

export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/why-fly-ash-bricks', label: 'Why Fly Ash' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/brick-calculator', label: 'Calculator' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="topbar">
      <div class="container topbar__inner">
        <span><app-icon name="pin" [size]="16" /> Podastia, Baripada, Odisha</span>
        <span class="topbar__right">
          <span><app-icon name="clock" [size]="16" /> {{ business.hoursShort }}</span>
          <a [href]="phoneLink"><app-icon name="phone" [size]="16" /> {{ business.phoneDisplay }}</a>
        </span>
      </div>
    </div>
    <header class="header">
      <div class="container header__inner">
        <a routerLink="/" class="header__brand" aria-label="Mahima Fly Ash Bricks — Home" (click)="open.set(false)">
          <app-logo />
        </a>
        <button
          type="button"
          class="header__toggle"
          [attr.aria-expanded]="open()"
          aria-controls="main-nav"
          aria-label="Menu"
          (click)="open.set(!open())"
        >
          <app-icon [name]="open() ? 'close' : 'menu'" [size]="26" />
        </button>
        <nav id="main-nav" class="nav" [class.nav--open]="open()" aria-label="Main">
          @for (l of links; track l.path) {
            <a
              [routerLink]="l.path"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: l.path === '/' }"
              (click)="open.set(false)"
              >{{ l.label }}</a
            >
          }
          <a class="btn btn--primary btn--sm nav__cta" [href]="phoneLink"><app-icon name="phone" [size]="16" /> Call Now</a>
        </nav>
      </div>
    </header>
  `,
})
export class Header {
  protected readonly links = NAV_LINKS;
  protected readonly business = BUSINESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly open = signal(false);
}
