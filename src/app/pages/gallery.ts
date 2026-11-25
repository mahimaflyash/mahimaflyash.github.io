import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { GALLERY, GalleryItem } from '../data/site-data';
import { CtaBand } from '../sections/cta-band';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';
import { Photo } from '../shared/photo';

type Filter = 'All' | GalleryItem['category'];

@Component({
  selector: 'app-gallery',
  imports: [PageHero, Photo, Icon, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'selected.set(null)' },
  template: `
    <app-page-hero eyebrow="Gallery" heading="Our plant, production & projects" />

    <section class="section">
      <div class="container">
        <div class="filters" role="group" aria-label="Filter photos">
          @for (f of filters; track f) {
            <button type="button" class="chip" [class.is-active]="filter() === f" [attr.aria-pressed]="filter() === f" (click)="filter.set(f)">
              {{ f }}
            </button>
          }
        </div>
        <div class="grid grid--3 gallery">
          @for (g of items(); track g.caption) {
            <figure class="gallery__item">
              <button type="button" class="gallery__btn" [disabled]="!g.image" (click)="selected.set(g)" [attr.aria-label]="'View ' + g.caption">
                <app-photo [src]="g.image" [alt]="g.caption" />
              </button>
              <figcaption><span class="badge">{{ g.category }}</span> {{ g.caption }}</figcaption>
            </figure>
          }
        </div>
      </div>
    </section>

    @if (selected(); as s) {
      <div class="lightbox" role="dialog" aria-modal="true" [attr.aria-label]="s.caption" (click)="selected.set(null)">
        <button type="button" class="lightbox__close" aria-label="Close" (click)="selected.set(null)">
          <app-icon name="close" [size]="28" />
        </button>
        <img [src]="s.image" [alt]="s.caption" (click)="$event.stopPropagation()" />
        <p>{{ s.caption }}</p>
      </div>
    }

    <app-cta-band />
  `,
})
export class Gallery {
  protected readonly filters: Filter[] = ['All', 'Plant', 'Production', 'Projects'];
  protected readonly filter = signal<Filter>('All');
  protected readonly selected = signal<GalleryItem | null>(null);
  protected readonly items = computed(() =>
    this.filter() === 'All' ? GALLERY : GALLERY.filter((g) => g.category === this.filter()),
  );
}
