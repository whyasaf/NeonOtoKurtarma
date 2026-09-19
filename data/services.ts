export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'oto-cekici',
    slug: 'oto-cekici',
    title: 'Oto Çekici',
    shortDescription: 'İstanbul genelinde 7/24 hızlı ve güvenli oto çekici hizmeti.',
  },
  {
    id: 'oto-kurtarma',
    slug: 'oto-kurtarma',
    title: 'Oto Kurtarma',
    shortDescription: 'Kaza ve arıza durumlarında profesyonel araç kurtarma çözümleri.',
  },
  {
    id: 'yol-yardim',
    slug: 'yol-yardim',
    title: 'Yol Yardım',
    shortDescription: 'Akü takviyesi, lastik değişimi ve acil yol yardım desteği.',
  },
];
