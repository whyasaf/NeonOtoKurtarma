export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Çekici çağırmak için ne yapmam gerekiyor?',
    answer:
      'Telefonla bize ulaşabilir veya WhatsApp üzerinden konumunuzu paylaşabilirsiniz. Aracınızın bulunduğu konumu ve ihtiyacınızı belirtmeniz yeterlidir.',
  },
  {
    id: 'faq-2',
    question: 'Çekici bulunduğum konuma ne kadar sürede gelir?',
    answer:
      'Bakırköy ve çevre ilçelerde ortalama ulaşım süremiz yaklaşık 20 dakikadır. Ancak trafik, konum ve yoğunluk gibi koşullara göre süre değişebilir.',
  },
  {
    id: 'faq-3',
    question: 'Gece veya hafta sonu çekici hizmeti alabilir miyim?',
    answer: 'Evet. 7/24 oto kurtarma ve yol yardım hizmeti sunuyoruz.',
  },
  {
    id: 'faq-4',
    question: 'Otoyolda veya yol kenarında kalan aracımı alabilir misiniz?',
    answer:
      'Evet. Aracınızın bulunduğu konuma gelerek uygun çekici ekipmanıyla taşıma hizmeti sağlıyoruz.',
  },
  {
    id: 'faq-5',
    question:
      'Aracım çalışmıyor, servise veya istediğim başka bir adrese götürebilir misiniz?',
    answer:
      'Evet. Aracınızı bulunduğu noktadan alarak servis, otopark veya belirttiğiniz uygun bir adrese taşıyabiliriz.',
  },
  {
    id: 'faq-6',
    question: 'Çekici ücreti ne kadar?',
    answer:
      'Ücret; konum, mesafe, aracın durumu ve ihtiyaç duyulan hizmete göre değişebilir. Güncel fiyat bilgisi için bizi arayabilirsiniz.',
  },
  {
    id: 'faq-7',
    question: "WhatsApp'tan konum göndererek çekici çağırabilir miyim?",
    answer:
      'Evet. WhatsApp üzerinden konumunuzu göndererek bulunduğunuz yeri kolayca paylaşabilirsiniz.',
  },
  {
    id: 'faq-8',
    question: 'Hangi araçları taşıyabiliyorsunuz?',
    answer:
      'Taşınacak aracın türüne ve durumuna göre uygun ekipman belirlenir. Aracınızın modelini ve bulunduğu konumu bize ileterek bilgi alabilirsiniz.',
  },
  {
    id: 'faq-9',
    question: 'Çekici hizmeti dışında yol yardım hizmeti de veriyor musunuz?',
    answer:
      'Evet. Akü takviyesi ve lastik değişimi gibi yol yardım hizmetleri de sunuyoruz.',
  },
  {
    id: 'faq-10',
    question: 'Şehirler arası araç taşıma yapıyor musunuz?',
    answer:
      'Evet. Özellikle VIP transfer kapsamında araçların şehirler arası taşınması için hizmet sunuyoruz.',
  },
];


export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    id: 'home-faq-1',
    question: 'Çekici numarası nedir?',
    answer:
      'NEON Oto Kurtarma çekici numarası 0545 154 19 10. Gece gündüz, hafta sonu dahil 7/24 aranabilir; WhatsApp üzerinden de ulaşabilirsiniz.',
  },
  {
    id: 'home-faq-2',
    question: 'En yakın çekiciyi nasıl çağırırım?',
    answer:
      'Bizi arayın ya da WhatsApp\'tan konumunuzu gönderin. Bulunduğunuz yere göre size en yakın ekibimizi yönlendiriyoruz. Merkezimiz Bakırköy\'de.',
  },
  {
    id: 'home-faq-3',
    question: 'Nöbetçi çekici gece ve hafta sonu da çalışıyor mu?',
    answer:
      'Evet. 7/24 nöbetçi çekici ve oto kurtarma hizmeti veriyoruz; gece, hafta sonu ve resmi tatillerde de arayabilirsiniz.',
  },
  {
    id: 'home-faq-4',
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer:
      'Bakırköy merkezli olarak İstanbul Avrupa Yakası başta olmak üzere tüm İstanbul\'a hizmet veriyoruz. Bakırköy, Ataköy, Florya, Zeytinburnu, Bahçelievler, Fatih ve çevre ilçeler için bölge sayfalarımıza bakabilirsiniz.',
  },
  {
    id: 'home-faq-5',
    question: 'Acil araç çekme hizmetinde ne yapıyorsunuz?',
    answer:
      'Arıza yapan ya da kaza geçiren aracı bulunduğu noktadan alıp servise, otoparka ya da belirttiğiniz adrese güvenle taşıyoruz. Gerekirse akü takviyesi ve lastik değişimi de yapıyoruz.',
  },
];
