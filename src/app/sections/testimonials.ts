import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../data/site-data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-testimonials',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--sand">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">Testimonials</p>
          <h2>What our customers say</h2>
        </div>
        <div class="grid grid--3">
          @for (t of testimonials; track $index) {
            <figure class="card testimonial">
              <div class="testimonial__stars" aria-hidden="true">
                @for (s of stars; track $index) {
                  <app-icon name="star" [size]="18" />
                }
              </div>
              <blockquote>“{{ t.quote }}”</blockquote>
              <figcaption>
                <strong>{{ t.name }}</strong>
                <span>{{ t.place }}</span>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
  protected readonly stars = [1, 2, 3, 4, 5];
}
