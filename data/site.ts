// Falls back to the production host when the env var is missing or empty.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://neonotokurtarma.com').replace(/\/+$/, '');

export const SITE_CONFIG = {
  brandName: 'NEON OTO KURTARMA',
  alternateNames: ['Neon Oto Kurtarma', 'Neon Çekici', 'Neon Oto Çekici', 'Neon Yol Yardım'],
  logoPath: '/images/neonlogonavbar.png',
  domain: SITE_URL,
  canonicalUrl: SITE_URL,
  phone: '0545 154 19 10',
  phoneRaw: '+905451541910',
  // Second line, same as the one listed on the Google Maps profile.
  phone2: '0546 191 08 84',
  phone2Raw: '+905461910884',
  whatsappRaw: '905451541910',
  email: 'neonotokurtarma@gmail.com',
  get phoneTelLink() {
    return `tel:${this.phoneRaw}`;
  },
  get phone2TelLink() {
    return `tel:${this.phone2Raw}`;
  },
  get whatsappLink() {
    return `https://wa.me/${this.whatsappRaw}`;
  },
  get emailLink() {
    return `mailto:${this.email}`;
  },
  socialLinks: {
    instagram: 'https://instagram.com/neonotokurtarma',
    tiktok: 'https://tiktok.com/@neonotokurtarma',
    youtube: 'https://youtube.com/@neonotokurtarma',
    whatsapp: `https://wa.me/905451541910`,
  },
  location: {
    streetAddress: 'Baharözü Sk. 10a',
    neighborhood: 'Zuhuratbaba',
    postalCode: '34100',
    district: 'Bakırköy',
    city: 'İstanbul',
    country: 'Türkiye',
    addressLocality: 'Bakırköy, İstanbul',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
    geo: {
      latitude: 40.99479226105204,
      longitude: 28.86632615293433,
    },
    formattedAddress: 'Baharözü Sk. 10a, Zuhuratbaba, 34100 Bakırköy / İstanbul',
    googleMapsUrl: 'https://www.google.com/maps?cid=13357453080096310059',
  },
  colors: {
    primary: '#00BF63',
    black: '#000000',
    white: '#FFFFFF',
  },
  businessType: 'Automotive / Roadside Assistance',
  schemaType: 'AutomotiveBusiness',
  availability: '7/24',
  openingHours: 'Mo-Su 00:00-24:00',
  defaultMeta: {
    title: '7/24 Nöbetçi Çekici & Oto Kurtarma | Bakırköy – NEON',
    description:
      '7/24 nöbetçi çekici ve oto kurtarma. Bakırköy merkezden tüm İstanbul\'a en yakın ekibi yönlendiriyoruz. Çekici numarası: 0545 154 19 10.',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
