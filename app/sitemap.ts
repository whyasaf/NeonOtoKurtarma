import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const routes = [
    '',
    '/hizmetler',
    '/galeri',
    '/hakkimizda',
    '/musteri-yorumlari',
    '/sosyal-medya',
    '/iletisim',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
