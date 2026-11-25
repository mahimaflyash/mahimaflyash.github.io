import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Banner shown at the top of each inner page. */
@Component({
  selector: 'app-page-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow eyebrow--light">{{ eyebrow() }}</p>
        <h1>{{ heading() }}</h1>
        @if (text()) {
          <p class="page-hero__text">{{ text() }}</p>
        }
      </div>
    </section>
  `,
})
export class PageHero {
  readonly eyebrow = input('');
  readonly heading = input.required<string>();
  readonly text = input('');
}
