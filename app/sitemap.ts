import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

// Update these dates when a page's content actually changes. A date that
// changes on every request makes search engines distrust the whole file.
const routes: { path: string; lastModified: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', lastModified: '2026-10-14', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/iletisim', lastModified: '2026-10-14', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/hizmetler', lastModified: '2026-10-14', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hakkimizda', lastModified: '2026-10-14', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/musteri-yorumlari', lastModified: '2026-10-14', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/galeri', lastModified: '2026-10-14', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/sosyal-medya', lastModified: '2026-10-14', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/kvkk-aydinlatma-metni', lastModified: '2026-10-14', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cerez-politikasi', lastModified: '2026-10-14', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/gizlilik-politikasi', lastModified: '2026-10-14', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_CONFIG.domain}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
