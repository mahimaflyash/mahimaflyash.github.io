import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAQS } from '../data/site-data';
import { CtaBand } from '../sections/cta-band';
import { PageHero } from '../shared/page-hero';

@Component({
  selector: 'app-faq',
  imports: [PageHero, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero eyebrow="FAQ" heading="Frequently asked questions" />
    <section class="section">
      <div class="container container--narrow faq">
        @for (f of faqs; track f.q; let first = $first) {
          <details class="faq__item" [open]="first">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        }
      </div>
    </section>
    <app-cta-band heading="Still have a question? Talk to us." />
  `,
})
export class Faq {
  protected readonly faqs = FAQS;
}
