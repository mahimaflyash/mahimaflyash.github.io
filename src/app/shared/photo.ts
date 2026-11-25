import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from './icon';

/** Shows the image if a path is set, otherwise a "Photo coming soon" placeholder. */
@Component({
  selector: 'app-photo',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (src()) {
      <img class="photo__img" [src]="src()" [alt]="alt()" loading="lazy" />
    } @else {
      <div class="photo__placeholder" role="img" [attr.aria-label]="alt() + ' (photo coming soon)'">
        <app-icon name="image" [size]="36" />
        <span>{{ alt() }}</span>
        <small>Photo coming soon</small>
      </div>
    }
  `,
  host: { class: 'photo' },
})
export class Photo {
  readonly src = input('');
  readonly alt = input('');
}
