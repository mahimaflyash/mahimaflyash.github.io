import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section center">
      <div class="container container--narrow">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <a class="btn btn--primary" routerLink="/">Go to Home</a>
      </div>
    </section>
  `,
})
export class NotFound {}
