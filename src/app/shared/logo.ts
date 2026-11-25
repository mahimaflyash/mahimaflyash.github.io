import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Text logo: a small brick-stack mark + "MAHIMA / FLY ASH BRICKS". */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--light]="light()">
      <svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="2" y="30" width="20" height="14" rx="2" fill="#a0412d" />
        <rect x="26" y="30" width="20" height="14" rx="2" fill="#c8744f" />
        <rect x="12" y="14" width="24" height="14" rx="2" fill="#c8744f" />
        <path d="M24 2c5 3 7 7 6 11-3-1-5-1-6 0-1-1-3-1-6 0-1-4 1-8 6-11z" fill="#5c7a4b" />
      </svg>
      <span class="logo__text">
        <span class="logo__name">MAHIMA</span>
        <span class="logo__sub">FLY ASH BRICKS</span>
      </span>
    </span>
  `,
})
export class Logo {
  readonly light = input(false);
}
