import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingActions } from './layout/floating-actions';
import { Footer } from './layout/footer';
import { Header } from './layout/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FloatingActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip-link" href="#main" (click)="$event.preventDefault(); main.focus()">Skip to content</a>
    <app-header />
    <main id="main" tabindex="-1" #main>
      <router-outlet />
    </main>
    <app-footer />
    <app-floating-actions />
  `,
})
export class App {}
