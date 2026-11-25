import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaBand } from '../sections/cta-band';
import { Icon } from '../shared/icon';
import { PageHero } from '../shared/page-hero';

@Component({
  selector: 'app-why-fly-ash',
  imports: [PageHero, Icon, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-page-hero
      eyebrow="Why fly ash bricks"
      heading="Better for your building, your budget and the environment"
      text="See how fly ash bricks compare with traditional red clay bricks."
    />

    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          @for (b of benefits; track b.title) {
            <div class="card feature">
              <span class="feature__icon"><app-icon [name]="b.icon" [size]="28" /></span>
              <h3>{{ b.title }}</h3>
              <p>{{ b.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">Comparison</p>
          <h2>Fly ash bricks vs red clay bricks</h2>
        </div>
        <div class="table-wrap">
          <table class="compare">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col" class="compare__good">Fly ash bricks</th>
                <th scope="col">Red clay bricks</th>
              </tr>
            </thead>
            <tbody>
              @for (r of rows; track r.feature) {
                <tr>
                  <th scope="row">{{ r.feature }}</th>
                  <td class="compare__good"><app-icon name="check" [size]="18" /> {{ r.flyAsh }}</td>
                  <td>{{ r.clay }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split split--center">
        <div>
          <p class="eyebrow">Good for the planet</p>
          <h2>Turning waste into strong walls</h2>
          <p>
            Fly ash is a by-product of thermal power plants. Using it to make bricks keeps it out of dumping
            grounds, saves fertile topsoil that red bricks need, and avoids burning coal or wood in kilns.
          </p>
          <p>Every fly ash brick wall is a small step towards cleaner air and greener farmland in Odisha.</p>
        </div>
        <div class="eco-stats">
          <div class="eco-stat"><app-icon name="leaf" [size]="32" /><span>No topsoil used</span></div>
          <div class="eco-stat"><app-icon name="factory" [size]="32" /><span>Reuses industrial waste</span></div>
          <div class="eco-stat"><app-icon name="drop" [size]="32" /><span>Water-cured, not kiln-fired</span></div>
        </div>
      </div>
    </section>

    <app-cta-band heading="Ready to build with fly ash bricks?" />
  `,
})
export class WhyFlyAsh {
  protected readonly benefits = [
    { icon: 'shield', title: 'High strength', text: 'Machine-pressed and properly cured for good, consistent strength.' },
    { icon: 'ruler', title: 'Uniform size', text: 'Same size and shape every time, giving straight, neat walls with thin joints.' },
    { icon: 'rupee', title: 'Lower cost', text: 'Less mortar and plaster needed, saving cement, sand and labour.' },
    { icon: 'drop', title: 'Less water absorption', text: 'Absorbs less water than red bricks, reducing dampness in walls.' },
    { icon: 'weight', title: 'Lighter weight', text: 'Easier to carry and lay, and less load on the structure.' },
    { icon: 'leaf', title: 'Eco-friendly', text: 'Made from fly ash with no topsoil and no kiln burning.' },
  ];

  protected readonly rows = [
    { feature: 'Raw material', flyAsh: 'Fly ash, cement, sand / stone dust', clay: 'Fertile topsoil (clay)' },
    { feature: 'Manufacturing', flyAsh: 'Machine-pressed, water-cured', clay: 'Hand-made, burnt in kilns' },
    { feature: 'Size & shape', flyAsh: 'Uniform, sharp edges', clay: 'Varies from brick to brick' },
    { feature: 'Surface finish', flyAsh: 'Smooth and even', clay: 'Rough and uneven' },
    { feature: 'Mortar & plaster', flyAsh: 'Less needed', clay: 'More needed' },
    { feature: 'Water absorption', flyAsh: 'Lower', clay: 'Higher' },
    { feature: 'Weight', flyAsh: 'Lighter', clay: 'Heavier' },
    { feature: 'Environment', flyAsh: 'Reuses waste, no burning', clay: 'Uses topsoil, causes smoke' },
  ];
}
