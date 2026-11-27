import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRODUCTS, whatsappLink } from '../data/site-data';
import { CtaBand } from '../sections/cta-band';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';
import { Photo } from '../shared/photo';

@Component({
  selector: 'app-products',
  imports: [PageHero, Photo, Icon, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Our products"
      heading="Fly ash bricks & precast cement products"
      text="Made at our plant in Baripada. Contact us for the latest price and delivery."
    />

    <section class="section">
      <div class="container grid grid--products">
        @for (p of products; track p.id) {
          <article class="card product" [id]="p.id">
            <app-photo [src]="p.image" [alt]="p.name" />
            <div class="product__body">
              <h2>{{ p.name }}</h2>
              <p>{{ p.summary }}</p>
              <dl class="specs">
                @for (s of p.specs; track s.label) {
                  <div>
                    <dt>{{ s.label }}</dt>
                    <dd>{{ s.value }}</dd>
                  </div>
                }
              </dl>
              <p class="product__uses"><strong>Used for:</strong> {{ p.uses.join(', ') }}</p>
              <div class="product__footer">
                <span class="price-tag">Contact for price</span>
                <a class="btn btn--whatsapp btn--sm" [href]="enquire(p.name)" target="_blank" rel="noopener">
                  <app-icon name="whatsapp" [size]="18" /> Get Price
                </a>
              </div>
            </div>
          </article>
        }
      </div>
    </section>

    <app-cta-band heading="Need a bulk order or a custom size?" />
  `,
})
export class Products {
  protected readonly products = PRODUCTS;
  protected enquire(name: string): string {
    return whatsappLink(`Hello, I would like to know the price of ${name}.`);
  }
}
