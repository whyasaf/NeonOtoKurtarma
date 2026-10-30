export interface ServicePage {
  /** Matches SERVICES_DATA slugs for our own services. */
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** One-line summary for cards. */
  summary: string;
  sections: { title: string; paragraphs: string[] }[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const DEFAULT_STEPS = [
  {
    title: 'Arayın ya da konum gönderin',
    description: 'Telefonla arayın veya WhatsApp üzerinden konumunuzu iletin.',
  },
  {
    title: 'Durumu birlikte netleştirelim',
    description: 'Aracınızın durumunu ve ihtiyacınızı öğrenip uygun müdahaleyi belirleriz.',
  },
  {
    title: 'Ekip yönlendirilir',
    description: 'Size en yakın ekip yola çıkar; süre trafik ve konuma göre değişir.',
  },
];

// Wording rule: say "hizmet veriyoruz". Never claim ownership of vehicles
// ("kendi araçlarımız", "filomuz"): kayar kasa / ahtapot are run by a partner.
export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'ariza-kaza',
    name: 'Oto çekici',
    h1: 'Oto çekici: arıza ve kaza sonrası araç taşıma.',
    metaTitle: 'Oto Çekici | Arıza & Kaza Araç Taşıma 7/24 – NEON',
    metaDescription:
      'Arıza yapan ya da kaza geçiren aracınız için 7/24 oto çekici ve acil araç çekme hizmeti. Bakırköy merkezli, tüm İstanbul. Çekici numarası: 0545 154 19 10.',
    summary: 'Arıza ve kaza sonrası aracı güvenle servise, otoparka ya da istediğiniz adrese taşıma.',
    intro:
      'Aracınız yolda durduysa, kaza geçirdiyse ya da çalışmıyorsa 7/24 oto çekici hizmeti veriyoruz. Aracı bulunduğu noktadan alıp servise, otoparka ya da belirttiğiniz adrese güvenle taşıyoruz.',
    sections: [
      {
        title: 'Hangi durumlarda çekici çağırılır?',
        paragraphs: [
          'Motor ya da şanzıman arızası nedeniyle araç hareket edemiyorsa, kaza sonrası araç sürülemez durumdaysa ya da yolda başka bir sebeple kalındıysa çekici gerekir. Aracı kendi başına çalıştırmaya zorlamak hasarı artırabilir.',
          'Emin değilseniz bizi arayın. Durumu dinleyip çekici mi yoksa akü takviyesi ya da lastik değişimi gibi daha basit bir müdahale mi yeterli, birlikte netleştiririz.',
        ],
      },
      {
        title: 'Çekici çağırırken bize ne söylemelisiniz?',
        paragraphs: [
          'Bulunduğunuz konum (WhatsApp ile anlık konum göndermeniz en kolayı), aracın markası ve modeli, ne olduğu ve aracı nereye götürmek istediğiniz yeterli. Aracınız vitesse alınmıyorsa ya da direksiyon kilitliyse mutlaka belirtin.',
        ],
      },
    ],
    steps: DEFAULT_STEPS,
    faqs: [
      {
        question: 'Çekici ücreti nasıl belirlenir?',
        answer:
          'Ücret konuma, mesafeye, aracın durumuna ve ihtiyaç duyulan hizmete göre değişir. Güncel bilgi için bizi arayabilirsiniz.',
      },
      {
        question: 'Aracı istediğim bir adrese götürebilir misiniz?',
        answer:
          'Evet. Aracınızı servise, otoparka ya da belirttiğiniz uygun bir adrese taşıyabiliriz.',
      },
      {
        question: 'Gece ve hafta sonu hizmet var mı?',
        answer: 'Evet. Çekici hattımız 7/24 açık.',
      },
    ],
  },
  {
    slug: 'aku-takviye',
    name: 'Akü takviye',
    h1: 'Akü takviye: aracınızı bulunduğunuz yerde çalıştırın.',
    metaTitle: 'Akü Takviye 7/24 | Yerinde Akü Takviyesi – NEON',
    metaDescription:
      'Aküsü biten aracınız için bulunduğunuz noktada 7/24 akü takviye. Bakırköy merkezli, tüm İstanbul. Telefon: 0545 154 19 10.',
    summary: 'Aküsü biten araç için bulunduğunuz noktada takviye ve çalıştırma desteği.',
    intro:
      'Aracınız marş basmıyor, farlar zayıf yanıyor ya da kontak açınca hiçbir şey olmuyorsa akü bitmiş olabilir. Bulunduğunuz noktaya gelip akü takviyesiyle aracınızı çalıştırmanıza yardımcı oluyoruz.',
    sections: [
      {
        title: 'Akü bitti mi, nasıl anlarsınız?',
        paragraphs: [
          'Kontak açıldığında göstergeler çok zayıf yanıyor ya da hiç yanmıyorsa, marş tık tık sesi yapıp motoru döndürmüyorsa ve kısa süre önce farlar ya da iç ışık açık kaldıysa büyük ihtimalle akü bitmiştir.',
        ],
      },
      {
        title: 'Takviye sonrası ne yapmalı?',
        paragraphs: [
          'Takviye aracı çalıştırır ama akünün kendisini yenilemez. Araç çalıştıktan sonra bir süre sürmeniz aküyü bir miktar doldurur. Aracınız tekrar çalışmaz hale geliyorsa aküyü bir servise kontrol ettirmenizi öneririz.',
          'Akü takviyesi ile aracın çalışmaması durumunda aracı servise ya da istediğiniz adrese çekici ile taşıyabiliriz.',
        ],
      },
    ],
    steps: DEFAULT_STEPS,
    faqs: [
      {
        question: 'Akü takviyesi için aracı çekmeniz gerekir mi?',
        answer:
          'Hayır. Akü takviyesi yerinde yapılır. Araç çalışmazsa taşıma seçeneğini birlikte değerlendiririz.',
      },
      {
        question: 'Akü takviyesi her araçta yapılabilir mi?',
        answer:
          'Çoğu araçta yapılabilir. Aracınızın marka ve modelini söylerseniz durumu telefonda netleştiririz.',
      },
      {
        question: 'Akü takviye hizmeti 7/24 mi?',
        answer: 'Evet. Gece ve hafta sonu dahil 7/24 arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'lastik-degisimi',
    name: 'Lastik değişimi',
    h1: 'Lastik değişimi: yolda patlayan lastiğe yerinde müdahale.',
    metaTitle: 'Yolda Lastik Değişimi 7/24 | Yol Yardım – NEON',
    metaDescription:
      'Patlayan ya da hasar gören lastik için bulunduğunuz noktada 7/24 lastik değişimi ve yol yardım. Bakırköy merkezli, tüm İstanbul.',
    summary: 'Patlayan veya hasar gören lastikler için bulunduğunuz yerde lastik değişim desteği.',
    intro:
      'Lastiğiniz patladıysa ya da yolda hasar gördüyse bulunduğunuz noktaya gelip lastik değişimi desteği sağlıyoruz. Amaç, yolda geçirdiğiniz süreyi azaltıp güvenle yola devam etmenizi sağlamak.',
    sections: [
      {
        title: 'Lastik patladığında ne yapmalısınız?',
        paragraphs: [
          'Aracı güvenli bir noktaya çekip dörtlüleri yakın, mümkünse yoldan uzaklaşın. Yoğun yol ya da otoyolda lastik değiştirmeye çalışmak tehlikelidir. Bize konumunuzu iletin, durumu birlikte değerlendirelim.',
        ],
      },
      {
        title: 'Hangi lastik ile devam edilir?',
        paragraphs: [
          'Değişim için aracınızda çalışır durumda yedek lastik ya da stepne bulunması gerekir. Yedeğiniz yoksa ya da lastik değişimi mümkün değilse aracı bir lastikçiye ya da servise çekici ile taşıyabiliriz.',
        ],
      },
    ],
    steps: DEFAULT_STEPS,
    faqs: [
      {
        question: 'Yedek lastiğim yoksa ne olur?',
        answer:
          'Yedek lastik yoksa aracı bir lastikçiye ya da servise taşımayı öneririz; bunu telefonda birlikte netleştiririz.',
      },
      {
        question: 'Lastik değişimi her yerde yapılır mı?',
        answer:
          'Güvenli bir noktadaysanız yerinde yapılır. Otoyol gibi tehlikeli yerlerde önce aracın güvenli bir noktaya alınması gerekir.',
      },
      {
        question: 'Lastik değişimi 7/24 yapılıyor mu?',
        answer: 'Evet. 7/24 aranabilir.',
      },
    ],
  },
  {
    slug: 'vip-transfer',
    name: 'VIP araç transferi',
    h1: 'Lüks araç transferi ve şehirler arası araç taşıma.',
    metaTitle: 'Lüks Araç Transferi & Şehirler Arası Araç Taşıma – NEON',
    metaDescription:
      'Değerli ve lüks araçlar için özenli VIP araç transferi, şehir içi ve şehirler arası araç taşıma. Bakırköy merkezli. Bilgi: 0545 154 19 10.',
    summary: 'Değerli ve lüks araçların şehir içi ve şehirler arası özel taşıma hizmeti.',
    intro:
      'Değerli ve lüks araçları şehir içinde ve şehirler arasında özenle taşıyoruz. Aracın değerine ve taşıma koşullarına uygun ekipman ve titiz bir operasyonla güvenli nakil sağlıyoruz.',
    sections: [
      {
        title: 'Hangi durumlarda VIP transfer tercih edilir?',
        paragraphs: [
          'Aracınızı satın aldığınız şehirden evinize, bir servise ya da fuara götürmek istiyorsanız; yüksek değerli, koleksiyon ya da lüks bir aracı sürmeden taşımak istiyorsanız VIP transfer uygundur.',
        ],
      },
      {
        title: 'Taşıma öncesi bize ne söylemelisiniz?',
        paragraphs: [
          'Aracın marka ve modeli, alınacak ve teslim edilecek adres, tarih ve aracın taşınmasına dair özel istekleriniz yeterli. Fiyat; mesafe, aracın durumu ve taşıma koşullarına göre netleştirilir, bunun için bizi arayabilirsiniz.',
        ],
      },
    ],
    steps: [
      {
        title: 'Bilgileri iletin',
        description: 'Araç bilgisi, alış ve teslim adresi ve tarihi bize söyleyin.',
      },
      {
        title: 'Plan ve fiyat netleşir',
        description: 'Taşıma koşullarına göre plan ve fiyat bilgisini paylaşırız.',
      },
      {
        title: 'Güvenli taşıma',
        description: 'Aracınız uygun ekipmanla belirlenen adrese taşınır.',
      },
    ],
    faqs: [
      {
        question: 'Şehirler arası araç taşıma yapıyor musunuz?',
        answer:
          'Evet. VIP transfer kapsamında araçları şehirler arası da taşıyoruz.',
      },
      {
        question: 'Fiyat nasıl belirlenir?',
        answer:
          'Mesafe, aracın durumu ve taşıma koşullarına göre belirlenir. Bilgi için bizi arayabilirsiniz.',
      },
      {
        question: 'Önceden randevu gerekir mi?',
        answer:
          'Planlı taşımalar için önceden haber vermeniz en iyisidir. Acil durumlar için de bizi arayabilirsiniz.',
      },
    ],
  },
  {
    slug: 'kayar-kasa-ahtapot-cekici',
    name: 'Kayar kasa, ahtapot ve aparatlı çekici',
    h1: 'Kayar kasa, ahtapot ve aparatlı çekici hizmeti.',
    metaTitle: 'Kayar Kasa, Ahtapot & Aparatlı Çekici 7/24 – NEON',
    metaDescription:
      'Kayar kasa, ahtapot ve aparatlı çekici hizmeti, İstanbul genelinde 7/24. Sürülemeyen, hasarlı ya da zor yerde kalan araçlar için arayın: 0545 154 19 10.',
    summary: 'Sürülemeyen, hasarlı ya da zor yerde kalan araçlar için kayar kasa, ahtapot ve aparatlı çekici.',
    intro:
      'Aracınız sürülemeyecek durumdaysa, hasar gördüyse ya da dar ve erişimi zor bir yerde kaldıysa kayar kasa, ahtapot ve aparatlı çekici hizmeti veriyoruz. Durumu anlatın, aracınıza uygun ekipmanı birlikte belirleyelim.',
    sections: [
      {
        title: 'Kayar kasa çekici ne zaman tercih edilir?',
        paragraphs: [
          'Kayar kasa çekicide araç kayar bir platforma yüklenir ve tekerlekler yerde dönmeden taşınır. Sürülemeyen, kaza sonrası hasarlı, düşük taban yapılı ya da değerli araçlarda ve araç uzun mesafe taşınacaksa genellikle bu yöntem tercih edilir.',
          'Aracınızın vitesi ya da direksiyonu kilitliyse veya tekerlekleri dönmüyorsa mutlaka belirtin.',
        ],
      },
      {
        title: 'Ahtapot çekici ne zaman gerekir?',
        paragraphs: [
          'Ahtapot çekici, dar ve erişimi zor alanlarda kalan ya da yoldan çıkıp şarampole düşen araçları çıkarmak için kullanılan kollu çekici türüdür. Normal bir çekicinin yaklaşamadığı yerlerde işe yarar.',
        ],
      },
      {
        title: 'Aparatlı çekici ne zaman tercih edilir?',
        paragraphs: [
          'Aparatlı çekici, aracın ön ya da arka aksını özel aparatla kaldırarak taşımayı sağlayan çekici türüdür. Aracın bu şekilde taşınmasına uygun olup olmadığı marka, şanzıman tipi ve arızanın yerine göre değişir; bunu telefonda birlikte netleştiririz.',
          'Hangi ekipmanın gerektiğinden emin değilseniz sorun değil: aracın nerede ve nasıl kaldığını anlatın, birlikte netleştirelim.',
        ],
      },
    ],
    steps: DEFAULT_STEPS,
    faqs: [
      {
        question: 'Kayar kasa çekici ile normal çekici arasındaki fark nedir?',
        answer:
          'Kayar kasa çekicide araç kayar bir platforma yüklenerek taşınır; araç yerle temas etmeden taşınmış olur. Sürülemeyen, hasarlı ya da değerli araçlarda sık tercih edilir.',
      },
      {
        question: 'Ahtapot çekici ne zaman gerekir?',
        answer:
          'Araç dar ve erişimi zor bir yerde kaldıysa ya da yoldan çıkıp şarampole düştüyse, normal çekicinin ulaşamadığı durumlarda ahtapot çekici gerekir.',
      },
      {
        question: 'Aparatlı çekici nedir?',
        answer:
          'Aracın ön ya da arka aksını özel bir aparatla kaldırarak taşımayı sağlayan çekici türüdür. Aracınıza uygun olup olmadığını telefonda birlikte netleştiririz.',
      },
      {
        question: 'Kayar kasa, ahtapot veya aparatlı çekiciyi nasıl çağırırım?',
        answer:
          'Bizi arayın ya da WhatsApp\'tan konumunuzu gönderin. Aracın durumunu anlatın, size uygun ekipmanla yola çıkalım.',
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}
