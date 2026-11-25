import { Routes } from '@angular/router';
import { Home } from './pages/home';

/** `title` sets the browser tab title; `data.description` sets the SEO meta description. */
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Fly Ash Bricks Manufacturer in Baripada, Odisha',
    data: {
      description:
        'Mahima Fly Ash Bricks, Baripada — manufacturer of fly ash bricks, solid blocks, boundary slabs, cement pillars and Tulsi Chaura. Delivery across Mayurbhanj. Call 094372 38893.',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about').then((m) => m.About),
    title: 'About Us',
    data: {
      description:
        'Over 20 years of trusted fly ash bricks and cement products in Baripada, Mayurbhanj. Owned by Alekh Kumar Behera.',
    },
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products').then((m) => m.Products),
    title: 'Products — Fly Ash Bricks, Blocks, Slabs & Pillars',
    data: {
      description:
        'Fly ash bricks, solid blocks, sky lights, boundary slabs, 6 ft & 9 ft cement pillars, boundary pillars and cement Tulsi Chaura in Baripada.',
    },
  },
  {
    path: 'why-fly-ash-bricks',
    loadComponent: () => import('./pages/why-fly-ash').then((m) => m.WhyFlyAsh),
    title: 'Why Fly Ash Bricks? Fly Ash vs Red Clay Bricks',
    data: {
      description:
        'Benefits of fly ash bricks over red clay bricks: uniform size, less plaster, lower cost, lighter weight and eco-friendly.',
    },
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery').then((m) => m.Gallery),
    title: 'Gallery',
    data: { description: 'Photos of the Mahima Fly Ash Bricks plant, production and customer projects in Baripada.' },
  },
  {
    path: 'brick-calculator',
    loadComponent: () => import('./pages/calculator').then((m) => m.Calculator),
    title: 'Brick Calculator — How Many Bricks Do I Need?',
    data: { description: 'Free brick calculator: estimate how many fly ash bricks you need for your wall.' },
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq').then((m) => m.Faq),
    title: 'FAQ',
    data: { description: 'Answers to common questions about fly ash bricks, prices and delivery in Baripada and Mayurbhanj.' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact').then((m) => m.Contact),
    title: 'Contact Us',
    data: {
      description:
        'Contact Mahima Fly Ash Bricks, Udala - Baripada Rd, Podastia, Baripada, Odisha 757049. Call or WhatsApp 094372 38893. Open 8 AM – 8 PM.',
    },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found').then((m) => m.NotFound),
    title: 'Page Not Found',
    data: { description: 'Page not found.' },
  },
];
