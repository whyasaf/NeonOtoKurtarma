import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { FAQ_ITEMS } from '@/data/faq';
import { SERVICES_DATA } from '@/data/services';
import type { RegionItem } from '@/data/regions';
import type { ServicePage } from '@/data/service-pages';

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
  const defaultOgImageUrl = `${SITE_CONFIG.domain}/images/neonsite-og.png`;

  const finalOgImageUrl = ogImage
    ? ogImage.startsWith('http://') || ogImage.startsWith('https://')
      ? ogImage
      : `${SITE_CONFIG.domain}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
    : defaultOgImageUrl;

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    icons: {
      icon: [
        { url: '/images/neonlogo.png?v=3', type: 'image/png', media: '(prefers-color-scheme: light)' },
        { url: '/images/neonlogo-white.png?v=3', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      ],
      apple: [{ url: '/icons/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' }],
    },
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
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.brandName,
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: finalOgImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [finalOgImageUrl],
    },
  };
}

export function generateAutomotiveBusinessSchema() {
  const businessId = `${SITE_CONFIG.domain}/#business`;
  const websiteId = `${SITE_CONFIG.domain}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.brandName,
        alternateName: SITE_CONFIG.alternateNames,
        inLanguage: 'tr-TR',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'AutomotiveBusiness',
        '@id': businessId,
        name: SITE_CONFIG.brandName,
        alternateName: SITE_CONFIG.alternateNames,
        url: SITE_CONFIG.domain,
        telephone: [SITE_CONFIG.phoneRaw, SITE_CONFIG.phone2Raw],
        email: SITE_CONFIG.email,
        logo: `${SITE_CONFIG.domain}/images/neonlogo.png`,
        image: `${SITE_CONFIG.domain}/images/neonsite-og.png`,
        description: SITE_CONFIG.defaultMeta.description,
        hasMap: SITE_CONFIG.location.googleMapsUrl,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE_CONFIG.location.geo.latitude,
          longitude: SITE_CONFIG.location.geo.longitude,
        },
        sameAs: [
          SITE_CONFIG.socialLinks.instagram,
          SITE_CONFIG.socialLinks.tiktok,
          SITE_CONFIG.socialLinks.youtube,
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${SITE_CONFIG.location.streetAddress}, ${SITE_CONFIG.location.neighborhood}`,
          addressLocality: SITE_CONFIG.location.district,
          postalCode: SITE_CONFIG.location.postalCode,
          addressRegion: SITE_CONFIG.location.city,
          addressCountry: SITE_CONFIG.location.addressCountry,
        },
        areaServed: [
          { '@type': 'City', name: SITE_CONFIG.location.city },
          { '@type': 'AdministrativeArea', name: SITE_CONFIG.location.district },
        ],
        contactPoint: [SITE_CONFIG.phoneRaw, SITE_CONFIG.phone2Raw].map((telephone) => ({
          '@type': 'ContactPoint',
          telephone,
          contactType: 'customer service',
          areaServed: 'TR',
          availableLanguage: 'Turkish',
        })),
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Oto kurtarma ve yol yardım hizmetleri',
          itemListElement: SERVICES_DATA.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title
                .toLocaleLowerCase('tr-TR')
                .replace(/(^|\s|\/)(\S)/g, (_, sep: string, ch: string) => sep + ch.toLocaleUpperCase('tr-TR')),
              description: service.description,
              areaServed: { '@type': 'City', name: SITE_CONFIG.location.city },
            },
          })),
        },
      },
    ],
  };
}

export function generateFaqSchema(items: { question: string; answer: string }[] = FAQ_ITEMS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface RegionFaq {
  question: string;
  answer: string;
}

export function generateRegionSchema(region: RegionItem, faqs: RegionFaq[]) {
  const pageUrl = `${SITE_CONFIG.domain}/${region.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `${region.name} oto çekici ve oto kurtarma`,
        serviceType: 'Oto çekici ve yol yardım',
        provider: { '@id': `${SITE_CONFIG.domain}/#business` },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${region.name}, ${SITE_CONFIG.location.city}`,
        },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Hizmet Bölgeleri', item: `${SITE_CONFIG.domain}/hizmet-bolgeleri` },
          { '@type': 'ListItem', position: 3, name: `${region.name} Çekici`, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}

export function generateServicePageSchema(page: ServicePage) {
  const pageUrl = `${SITE_CONFIG.domain}/hizmetler/${page.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: page.name,
        serviceType: page.name,
        description: page.intro,
        provider: { '@id': `${SITE_CONFIG.domain}/#business` },
        areaServed: { '@type': 'City', name: SITE_CONFIG.location.city },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${SITE_CONFIG.domain}/hizmetler` },
          { '@type': 'ListItem', position: 3, name: page.name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };
}
