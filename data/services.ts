export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  meta: string[];
  shortDescription: string;
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ariza-kaza',
    slug: 'ariza-kaza',
    number: '01',
    title: 'ARIZA / KAZA',
    meta: ['7/24 DESTEK', 'İSTANBUL'],
    shortDescription: 'Arızalanan veya kaza yapan araçların güvenli şekilde çekilerek adrese taşınması.',
    description:
      'Arızalanan veya kaza yapan araçların güvenli şekilde bulunduğu noktadan alınarak ihtiyaç duyulan adrese taşınmasını sağlıyoruz. Profesyonel ekip ve uygun çekici ekipmanlarıyla araç taşıma sürecini güvenli şekilde yönetiyoruz.',
  },
  {
    id: 'vip-transfer',
    slug: 'vip-transfer',
    number: '02',
    title: 'VIP TRANSFER',
    meta: ['ÖZEL ARAÇ TAŞIMA', 'ŞEHİRLER ARASI'],
    shortDescription: 'Değerli ve lüks araçların şehir içi ve şehirler arası özel taşıma hizmeti.',
    description:
      'Değerli ve lüks araçların şehirler arası taşınması için özel taşıma hizmeti sunuyoruz. Aracın değerine ve taşıma koşullarına uygun ekipman ve özenli operasyon anlayışıyla güvenli nakil sağlıyoruz.',
  },
  {
    id: 'aku-takviye',
    slug: 'aku-takviye',
    number: '03',
    title: 'AKÜ TAKVİYE',
    meta: ['SAHA MÜDAHALESİ', '7/24'],
    shortDescription: 'Bitmiş aküler için bulunduğunuz noktada hızlı 7/24 takviye ve çalıştırma desteği.',
    description:
      'Aküsü biten araçlar için bulunduğunuz noktada akü takviye desteği sağlıyoruz. Uygun ekipmanla gerçekleştirilen müdahale sayesinde aracınızın yeniden çalıştırılmasına yardımcı oluyoruz.',
  },
  {
    id: 'lastik-degisimi',
    slug: 'lastik-degisimi',
    number: '04',
    title: 'LASTİK DEĞİŞİMİ',
    meta: ['YOL YARDIM', 'SAHA DESTEĞİ'],
    shortDescription: 'Patlayan veya hasar gören lastikler için yerinde hızlı lastik değişim desteği.',
    description:
      'Patlayan veya hasar gören lastiklerde bulunduğunuz noktaya ulaşarak gerekli lastik değişimi desteğini sağlıyoruz. Amaç, yolda geçirdiğiniz süreyi mümkün olduğunca azaltarak güvenli şekilde hareket etmenizi sağlamak.',
  },
  {
    id: 'yakit-destegi',
    slug: 'yakit-destegi',
    number: '05',
    title: 'YAKIT DESTEĞİ',
    meta: ['7/24 DESTEK', 'SAHA MÜDAHALESİ'],
    shortDescription: 'Yakıtı tükenen araçlar için konuma özel hızlı yakıt ikmal desteği.',
    description:
      'Yakıtı tükenen araçlar için bulunduğunuz konuma ulaşarak yakıt desteği sağlıyoruz. Gerekli desteğin ardından yolculuğumuza devam edebilmeniz için hızlı ve pratik bir çözüm sunuyoruz.',
  },
];
