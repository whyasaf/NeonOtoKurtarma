export const SITE_CONFIG = {
  brandName: 'NEON OTO KURTARMA',
  domain: 'https://neonotokurtarma.com',
  canonicalUrl: 'https://neonotokurtarma.com',
  phone: '0545 154 19 10',
  phoneRaw: '+905451541910',
  whatsappRaw: '905451541910',
  get phoneTelLink() {
    return `tel:${this.phoneRaw}`;
  },
  get whatsappLink() {
    return `https://wa.me/${this.whatsappRaw}`;
  },
  location: {
    streetAddress: 'Çağ Sokak No:22',
    neighborhood: 'Zuhuratbaba',
    district: 'Bakırköy',
    city: 'İstanbul',
    country: 'Türkiye',
    addressLocality: 'Bakırköy, İstanbul',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
    formattedAddress: 'Çağ Sokak No:22, Zuhuratbaba, Bakırköy / İstanbul',
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
    title: 'NEON Oto Kurtarma | İstanbul 7/24 Oto Çekici & Yol Yardım',
    description:
      'NEON Oto Kurtarma, İstanbul genelinde 7/24 oto kurtarma ve yol yardım hizmeti sunar. Oto çekici, kaza yardımı ve yol yardım desteği için bize ulaşın.',
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
