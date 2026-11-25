import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { whatsappLink } from '../data/site-data';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';

type Unit = 'ft' | 'm';
type Thickness = 'half' | 'full';

const FT_TO_M = 0.3048;

@Component({
  selector: 'app-calculator',
  imports: [PageHero, Icon, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculator.html',
})
export class Calculator {
  // Wall
  protected readonly unit = signal<Unit>('ft');
  protected readonly length = signal<number | null>(20);
  protected readonly height = signal<number | null>(10);
  protected readonly openings = signal<number | null>(0);
  protected readonly thickness = signal<Thickness>('half');

  // Brick size (mm) — editable; change to your actual brick size
  protected readonly brickL = signal<number | null>(230);
  protected readonly brickH = signal<number | null>(75);
  protected readonly joint = signal<number | null>(10);
  protected readonly wastage = signal<number | null>(5);

  protected readonly netAreaM2 = computed(() => {
    const f = this.unit() === 'ft' ? FT_TO_M * FT_TO_M : 1;
    const gross = (this.length() ?? 0) * (this.height() ?? 0) * f;
    const open = (this.openings() ?? 0) * f;
    return Math.max(gross - open, 0);
  });

  protected readonly bricks = computed(() => {
    const j = (this.joint() ?? 0) / 1000;
    const face = ((this.brickL() ?? 0) / 1000 + j) * ((this.brickH() ?? 0) / 1000 + j);
    if (face <= 0) return 0;
    const layers = this.thickness() === 'full' ? 2 : 1;
    return Math.ceil((this.netAreaM2() / face) * layers);
  });

  protected readonly withWastage = computed(() =>
    Math.ceil(this.bricks() * (1 + (this.wastage() ?? 0) / 100)),
  );

  protected readonly quoteLink = computed(() =>
    whatsappLink(
      `Hello, I need about ${this.withWastage().toLocaleString('en-IN')} fly ash bricks. ` +
        `Wall: ${this.length()} x ${this.height()} ${this.unit()}. Please share the price.`,
    ),
  );

  protected areaLabel(): string {
    return this.unit() === 'ft' ? 'sq ft' : 'sq m';
  }
}
