import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';

interface ConstructMetadataInput {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = SITE_CONFIG.defaultMeta.title,
  description = SITE_CONFIG.defaultMeta.description,
  path = '',
  ogImage,
  noIndex = false,
}: ConstructMetadataInput = {}): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.domain}${cleanPath === '/' ? '' : cleanPath}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.brandName,
      locale: 'tr_TR',
      type: 'website',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export function generateAutomotiveBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.phoneRaw,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.location.streetAddress,
      addressLocality: SITE_CONFIG.location.district,
      addressRegion: SITE_CONFIG.location.city,
      addressCountry: SITE_CONFIG.location.addressCountry,
    },
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.location.city,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
}
