import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BUSINESS, PRODUCTS } from '../data/site-data';
import { CtaBand } from '../sections/cta-band';
import { HeroSlider } from '../sections/hero-slider';
import { Testimonials } from '../sections/testimonials';
import { Icon } from '../shared/icon';
import { Photo } from '../shared/photo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, Photo, HeroSlider, Testimonials, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  protected readonly business = BUSINESS;
  protected readonly products = PRODUCTS.slice(0, 4);

  protected readonly highlights = [
    { icon: 'factory', value: `${BUSINESS.yearsInBusiness}+`, label: 'Years in business' },
    { icon: 'bricks', value: '8+', label: 'Products' },
    { icon: 'truck', value: 'Site', label: 'Delivery in Mayurbhanj' },
    { icon: 'clock', value: '7 days', label: BUSINESS.hoursShort },
  ];

  protected readonly benefits = [
    { icon: 'leaf', title: 'Eco-friendly', text: 'Made from fly ash and not burnt in a kiln, so no topsoil is used and less smoke is produced.' },
    { icon: 'shield', title: 'Strong & uniform', text: 'Machine-pressed for the same size, shape and quality in every brick.' },
    { icon: 'rupee', title: 'Saves money', text: 'Smooth, even surface needs less mortar and plaster, saving cement and labour.' },
    { icon: 'weight', title: 'Easy to handle', text: 'Lighter than red clay bricks, so walls go up faster.' },
  ];
}
