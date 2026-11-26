import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Every real page is prerendered to static HTML at build time (SSG), so the
 * content is visible to crawlers and link previews without JavaScript.
 * Unknown URLs fall back to client rendering (served via 404.html on GitHub Pages).
 */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'products', renderMode: RenderMode.Prerender },
  { path: 'why-fly-ash-bricks', renderMode: RenderMode.Prerender },
  { path: 'gallery', renderMode: RenderMode.Prerender },
  { path: 'brick-calculator', renderMode: RenderMode.Prerender },
  { path: 'faq', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'privacy-policy', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
