import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.brandName,
    short_name: 'NEON Oto Kurtarma',
    description: SITE_CONFIG.defaultMeta.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#00BF63',
    icons: [
      {
        src: '/images/neonlogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/neonlogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
