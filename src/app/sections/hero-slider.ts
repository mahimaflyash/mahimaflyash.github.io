import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BANNER_SLIDES, BUSINESS, PHONE_LINK, PRODUCTS, whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';

const INTERVAL_MS = 5000;

/** Full-width, auto-rotating home page banner. Slides are set in site-data.ts. */
@Component({
  selector: 'app-hero-slider',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-slider.html',
  host: {
    '(mouseenter)': 'paused.set(true)',
    '(mouseleave)': 'paused.set(false)',
    '(focusin)': 'paused.set(true)',
    '(focusout)': 'paused.set(false)',
    '(touchstart)': 'onTouchStart($event)',
    '(touchend)': 'onTouchEnd($event)',
    '(keydown.arrowleft)': 'prev()',
    '(keydown.arrowright)': 'next()',
  },
})
export class HeroSlider {
  protected readonly slides = BANNER_SLIDES;
  protected readonly business = BUSINESS;
  protected readonly phoneLink = PHONE_LINK;
  protected readonly current = signal(0);
  protected readonly paused = signal(false);
  private touchX = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const id = setInterval(() => {
        if (!this.paused() && !document.hidden) this.next();
      }, INTERVAL_MS);
      destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  protected next(): void {
    this.current.update((i) => (i + 1) % this.slides.length);
  }

  protected prev(): void {
    this.current.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  protected go(i: number): void {
    this.current.set(i);
  }

  protected onTouchStart(e: TouchEvent): void {
    this.touchX = e.changedTouches[0].clientX;
  }

  protected onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? this.next() : this.prev());
  }

  protected productName(id?: string): string {
    return PRODUCTS.find((p) => p.id === id)?.name ?? '';
  }

  protected priceLink(id?: string): string {
    const name = this.productName(id);
    return name ? whatsappLink(`Hello, I would like to know the price of ${name}.`) : whatsappLink();
  }
}
