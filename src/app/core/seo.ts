import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { BUSINESS } from '../data/site-data';

/** Site URL used for canonical / og:url tags. Change if you add a custom domain. */
export const SITE_URL = 'https://mahimaflyash.github.io';

/**
 * Sets the page title ("<route title> | Mahima Fly Ash Bricks") plus the
 * meta description, Open Graph tags and canonical link on every navigation.
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    const fullTitle = pageTitle ? `${pageTitle} | ${BUSINESS.name}` : BUSINESS.name;
    this.title.setTitle(fullTitle);

    let route = snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const description: string | undefined = route.data['description'];
    const url = SITE_URL + snapshot.url.split(/[?#]/)[0];

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:url', content: url });

    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }
}
