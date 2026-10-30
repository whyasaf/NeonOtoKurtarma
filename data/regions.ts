export interface RegionItem {
  /** URL slug, e.g. "bakirkoy-cekici" */
  slug: string;
  name: string;
  /** İlçe the semt belongs to. Same as `name` for district-level pages. */
  district: string;
  /** True when our base (Bakırköy) covers the area directly. */
  isHome: boolean;
  intro: string;
  areas: string[];
  roads: string[];
  situations: string[];
  neighbors: string[];
  /** Overrides the generated "<name> Çekici & Oto Kurtarma 7/24 | NEON" title. */
  metaTitle?: string;
  /** Extra content blocks, only for regions where we have something real to say. */
  extraSections?: { title: string; paragraphs: string[] }[];
  extraFaqs?: { question: string; answer: string }[];
}

// Content is intentionally unique per region. Do not add response-time
// promises here unless they are true for that specific area.
export const REGIONS: RegionItem[] = [
  {
    slug: 'bakirkoy-cekici',
    name: 'Bakırköy',
    district: 'Bakırköy',
    isHome: true,
    intro:
      "NEON Oto Kurtarma'nın merkezi Bakırköy'de, Zuhuratbaba'da bulunuyor. Bakırköy'de yolda kalan, kaza yapan ya da aracı çalışmayan sürücülere merkezimizden doğrudan ekip yönlendiriyoruz. Telefonla arayabilir ya da WhatsApp'tan konumunuzu gönderebilirsiniz.",
    areas: ['Zuhuratbaba', 'Osmaniye', 'Cevizlik', 'Kartaltepe', 'Şenlikköy', 'Yeşilyurt'],
    roads: ['E-5 (D100) Bakırköy hattı', 'Sahil Yolu', 'Bakırköy merkez ana caddeleri'],
    situations: [
      'Dar ve park yoğunluğu yüksek sokaklarda çıkamayan ya da sıkışan araçlar',
      'Site ve apartman otoparklarında aküsü biten araçlar',
      'E-5 ve sahil yolunda arıza ya da kaza sonrası taşıma',
    ],
    neighbors: ['atakoy-cekici', 'yesilkoy-cekici', 'florya-cekici', 'zeytinburnu-cekici', 'bahcelievler-cekici'],
    metaTitle: 'Bakırköy Çekici | 7/24 Nöbetçi Oto Kurtarma – NEON',
    extraSections: [
      {
        title: "Bakırköy'de en yakın çekici",
        paragraphs: [
          "Merkezimiz Bakırköy'de, Zuhuratbaba'da. Bakırköy'de arıza yapan, kaza geçiren ya da çalışmayan aracınız için aradığınızda ekibi merkezden yönlendiriyoruz. Bakırköy'de çekici numarası arayanlar için hat 7/24 açık: 0545 154 19 10.",
          'Telefonda konumunuzu tarif etmek zor olursa WhatsApp üzerinden anlık konum göndermeniz yeterli.',
        ],
      },
      {
        title: 'Bakırköy akü takviye',
        paragraphs: [
          "Aracınız marş basmıyor, farlar ve gösterge ışıkları zayıf yanıyorsa akü bitmiş olabilir. Bakırköy'de akü takviyesi için bulunduğunuz noktaya geliyor, uygun ekipmanla aracınızı çalıştırmanıza yardımcı oluyoruz. Sokakta ya da site otoparkında olması fark etmez.",
          'Takviye aracı çalıştırır ama akünün kendisini yenilemez. Aracınız takviyeden sonra tekrar çalışmaz hale geliyorsa aküyü bir servise kontrol ettirmenizi öneririz.',
        ],
      },
      {
        title: 'Bakırköy yol yardım',
        paragraphs: [
          "Bakırköy'de çekici ve akü takviyesine ek olarak lastik değişimi gibi yol yardım hizmetlerini de veriyoruz. Araç taşıma gerekirse aracınızı servise, otoparka ya da belirttiğiniz adrese güvenle taşıyoruz.",
        ],
      },
    ],
    extraFaqs: [
      {
        question: "Bakırköy'de en yakın çekici hangisi?",
        answer:
          "NEON Oto Kurtarma'nın merkezi Bakırköy'de, Zuhuratbaba'da. Bakırköy içinden aradığınızda ekip doğrudan merkezden yönlendirilir; süre trafik ve konuma göre değişir.",
      },
      {
        question: "Bakırköy'de akü takviyesi için çekici gerekir mi?",
        answer:
          "Hayır. Akü takviyesi yerinde yapılır; aracınız çalışırsa taşıma gerekmez. Çalışmazsa aracı servise ya da istediğiniz adrese taşıyabiliriz.",
      },
    ],
  },
  {
    slug: 'atakoy-cekici',
    name: 'Ataköy',
    district: 'Bakırköy',
    isHome: true,
    intro:
      "Ataköy, Bakırköy'ün sahil kesiminde yer alıyor ve merkezimize yakın. Ataköy'de aracınız arızalandığında, aküsü bittiğinde ya da lastiği patladığında konumunuzu gönderin, ekibimiz yönlendirilsin.",
    areas: ['Ataköy 1. Kısım', 'Ataköy 2-5-6. Kısım', 'Ataköy 7-8-9-10. Kısım', 'Ataköy 3-4-11. Kısım', 'Ataköy Marina çevresi'],
    roads: ['E-5 (D100)', 'Ataköy sahil yolu', 'Ataköy iç caddeleri'],
    situations: [
      'Site ve apartman otoparklarında çalışmayan araçlar',
      'Sahil yolunda yaşanan arıza ve küçük kazalar',
      'Marina ve sosyal tesis çevresinde akü takviyesi',
    ],
    neighbors: ['bakirkoy-cekici', 'yesilkoy-cekici', 'zeytinburnu-cekici', 'bahcelievler-cekici'],
  },
  {
    slug: 'florya-cekici',
    name: 'Florya',
    district: 'Bakırköy',
    isHome: true,
    intro:
      "Florya, Bakırköy'ün batı ucunda, Küçükçekmece sınırına yakın. Florya'da yolda kalan araçlar için merkezimizden ekip yönlendiriyor, çekici, akü takviye ve lastik değişimi hizmeti veriyoruz.",
    areas: ['Florya sahil çevresi', 'Florya Atatürk Ormanı çevresi', 'Florya iç mahalleleri'],
    roads: ['E-5 (D100)', 'Florya sahil yolu', 'Yeşilköy–Florya hattı'],
    situations: [
      'Sahil yolunda yaz aylarında yoğunlaşan arıza ve kazalar',
      'Orman ve park çevresinde park halinde kalan aracın akü sorunu',
      'E-5 üzerinde yolda kalan araçların güvenle taşınması',
    ],
    neighbors: ['yesilkoy-cekici', 'bakirkoy-cekici', 'sefakoy-cekici', 'kucukcekmece-cekici'],
  },
  {
    slug: 'yesilkoy-cekici',
    name: 'Yeşilköy',
    district: 'Bakırköy',
    isHome: true,
    intro:
      "Yeşilköy, Bakırköy'e bağlı ve merkezimize yakın bir sahil semti. Yeşilköy'de çekici, oto kurtarma, akü takviye ve lastik değişimi için 7/24 telefonla ya da WhatsApp'tan ulaşabilirsiniz.",
    areas: ['Yeşilköy sahil', 'Yeşilköy çarşı çevresi', 'Yeşilköy iç mahalleleri'],
    roads: ['E-5 (D100)', 'Yeşilköy sahil yolu', 'Florya–Ataköy bağlantısı'],
    situations: [
      'Dar sokaklarda sıkışan ya da park halinde bloke olan araçlar',
      'Sahil bölgesinde yolda kalan araçlar',
      'Sabah erken saatlerde çalışmayan, aküsü biten araçlar',
    ],
    neighbors: ['florya-cekici', 'atakoy-cekici', 'bakirkoy-cekici', 'sefakoy-cekici'],
  },
  {
    slug: 'zeytinburnu-cekici',
    name: 'Zeytinburnu',
    district: 'Zeytinburnu',
    isHome: false,
    intro:
      "Zeytinburnu, Bakırköy'ün hemen doğusunda yer alıyor. Merkezimizden Zeytinburnu'na ekip yönlendiriyor, arıza ve kaza sonrası araç taşıma, akü takviyesi ve lastik değişimi hizmeti veriyoruz. Süre trafiğe ve konuma göre değişir.",
    areas: ['Kazlıçeşme', 'Merkezefendi', 'Seyitnizam', 'Beştelsiz', 'Telsiz', 'Veliefendi'],
    roads: ['E-5 (D100) Zeytinburnu hattı', 'Kennedy Caddesi', 'Çırpıcı–Topkapı bağlantıları'],
    situations: [
      'Yoğun trafikte E-5 üzerinde durup kalan araçlar',
      'Sanayi ve iş yerleri çevresinde çalışmayan araçlar',
      'Sahil yolunda yaşanan arıza ve küçük kazalar',
    ],
    neighbors: ['cevizlibag-cekici', 'bakirkoy-cekici', 'fatih-cekici', 'bayrampasa-cekici'],
  },
  {
    slug: 'bahcelievler-cekici',
    name: 'Bahçelievler',
    district: 'Bahçelievler',
    isHome: false,
    intro:
      "Bahçelievler, Bakırköy'ün kuzeybatısında, merkezimize komşu bir ilçe. Bahçelievler'de yolda kalan araçlar için Bakırköy'den ekip yönlendiriyoruz. Konumunuzu WhatsApp'tan göndermeniz yeterli.",
    areas: ['Şirinevler', 'Yenibosna', 'Siyavuşpaşa', 'Cumhuriyet', 'Hürriyet', 'Soğanlı', 'Kocasinan'],
    roads: ['E-5 (D100)', 'Basın Ekspres Yolu', 'TEM bağlantı yolları'],
    situations: [
      'Yoğun apartman bölgelerinde park halinde aküsü biten araçlar',
      'E-5 ve Basın Ekspres üzerinde arıza ve kaza',
      'Çarşı ve iş merkezi çevresinde bloke olan araçlar',
    ],
    neighbors: ['sefakoy-cekici', 'bakirkoy-cekici', 'gungoren-cekici', 'kucukcekmece-cekici', 'bagcilar-cekici'],
  },
  {
    slug: 'sefakoy-cekici',
    name: 'Sefaköy',
    district: 'Küçükçekmece',
    isHome: false,
    intro:
      "Sefaköy, Küçükçekmece'ye bağlı ve E-5 hattının önemli noktalarından biri. Sefaköy'de çekici, oto kurtarma ve akü takviyesi için Bakırköy merkezimizden ekip yönlendiriyoruz.",
    areas: ['Sefaköy merkez', 'E-5 çevresi', 'Sefaköy iç mahalleleri'],
    roads: ['E-5 (D100)', 'Basın Ekspres Yolu', 'Küçükçekmece–Bakırköy hattı'],
    situations: [
      'E-5 üzerinde yolda kalan, çekici bekleyen araçlar',
      'Yoğun ticari bölgelerde çalışmayan araçlar',
      'Alışveriş ve iş yeri otoparklarında akü takviyesi',
    ],
    neighbors: ['kucukcekmece-cekici', 'bahcelievler-cekici', 'florya-cekici', 'bakirkoy-cekici'],
  },
  {
    slug: 'fatih-cekici',
    name: 'Fatih',
    district: 'Fatih',
    isHome: false,
    intro:
      "Fatih'te dar sokaklar, tarihi yarımada trafiği ve yoğun park durumu araç kurtarmayı zorlaştırabiliyor. Fatih'te yolda kalan araçlar için merkezimizden ekip yönlendiriyor, uygun ekipmanla araç taşıma ve yol yardım sağlıyoruz.",
    areas: ['Aksaray', 'Yenikapı', 'Fındıkzade', 'Çapa', 'Topkapı', 'Sultanahmet çevresi', 'Balat'],
    roads: ['Kennedy Caddesi (sahil yolu)', 'Vatan Caddesi', 'Millet Caddesi'],
    situations: [
      'Dar sokakta park halinde sıkışan ya da bloke olan araçlar',
      'Sahil yolu ve ana arterlerde arıza ve kaza',
      'Çarşı ve iş yeri çevresinde çalışmayan araçlar',
    ],
    neighbors: ['cevizlibag-cekici', 'zeytinburnu-cekici', 'bayrampasa-cekici', 'bakirkoy-cekici'],
  },
  {
    slug: 'cevizlibag-cekici',
    name: 'Cevizlibağ',
    district: 'Zeytinburnu',
    isHome: false,
    intro:
      "Cevizlibağ, Zeytinburnu'na bağlı ve Topkapı hattının hemen yakınında. Cevizlibağ'da yolda kalan araçlar için Bakırköy merkezimizden ekip yönlendiriyoruz. Süre trafik yoğunluğuna göre değişir.",
    areas: ['Cevizlibağ merkez', 'Topkapı çevresi', 'Maltepe hattı'],
    roads: ['Millet Caddesi', 'Topkapı hattı', 'Cevizlibağ metrobüs durağı çevresi'],
    situations: [
      'Yoğun saatlerde trafiğin ortasında durup kalan araçlar',
      'Metrobüs ve ana arter çevresinde arıza ve kaza',
      'İş yeri ve site otoparklarında aküsü biten araçlar',
    ],
    neighbors: ['zeytinburnu-cekici', 'fatih-cekici', 'bayrampasa-cekici', 'merter-cekici'],
  },
  {
    slug: 'merter-cekici',
    name: 'Merter',
    district: 'Güngören',
    isHome: false,
    intro:
      "Merter, Güngören'e bağlı ve tekstil ile iş merkezleriyle yoğun bir bölge. Merter'de arızalanan, kaza yapan ya da aküsü biten araçlar için Bakırköy merkezimizden ekip yönlendiriyoruz.",
    areas: ['Merter merkez', 'Merter iş merkezleri çevresi', 'Güngören sınırı'],
    roads: ['E-5 (D100) hattı', 'Merter ana caddeleri'],
    situations: [
      'İş merkezi ve plazaların otoparklarında çalışmayan araçlar',
      'Yoğun gün içi trafiğinde arıza ve küçük kazalar',
      'Yükleme-boşaltma yoğunluğunda bloke olan araçlar',
    ],
    neighbors: ['gungoren-cekici', 'bagcilar-cekici', 'cevizlibag-cekici', 'bahcelievler-cekici'],
  },
  {
    slug: 'kucukcekmece-cekici',
    name: 'Küçükçekmece',
    district: 'Küçükçekmece',
    isHome: false,
    intro:
      "Küçükçekmece, Bakırköy'ün batısında geniş bir ilçe. Küçükçekmece'de araç arızası, kaza ve yolda kalma durumlarında Bakırköy merkezimizden ekip yönlendiriyor, çekici ve yol yardım hizmeti veriyoruz.",
    areas: ['Küçükçekmece merkez', 'Sefaköy', 'Halkalı', 'Atakent', 'Kanarya'],
    roads: ['E-5 (D100)', 'Basın Ekspres Yolu', 'Küçükçekmece sahil yolu'],
    situations: [
      'E-5 ve Basın Ekspres üzerinde arıza ve kaza',
      'Göl ve sahil çevresinde park halinde kalan araçlar',
      'Geniş site bölgelerinde aküsü biten araçlar',
    ],
    neighbors: ['sefakoy-cekici', 'florya-cekici', 'bahcelievler-cekici', 'bakirkoy-cekici'],
  },
  {
    slug: 'gungoren-cekici',
    name: 'Güngören',
    district: 'Güngören',
    isHome: false,
    intro:
      "Güngören, Bakırköy'ün kuzeyinde yoğun yerleşimli bir ilçe. Güngören'de yolda kalan araçlar için Bakırköy merkezimizden ekip yönlendiriyoruz. Konumunuzu WhatsApp'tan paylaşmanız süreci hızlandırır.",
    areas: ['Merter', 'Haznedar', 'Tozkoparan', 'Güven', 'Güngören merkez'],
    roads: ['E-5 ve TEM bağlantı yolları', 'Güngören ana caddeleri'],
    situations: [
      'Sıkışık sokaklarda park halinde sıkışan araçlar',
      'İş yeri ve atölye çevresinde çalışmayan araçlar',
      'Ana arterlerde arıza ve küçük kazalar',
    ],
    neighbors: ['merter-cekici', 'bagcilar-cekici', 'bahcelievler-cekici', 'bakirkoy-cekici'],
  },
  {
    slug: 'bayrampasa-cekici',
    name: 'Bayrampaşa',
    district: 'Bayrampaşa',
    isHome: false,
    intro:
      "Bayrampaşa, Fatih ve Zeytinburnu hattının kuzeyinde, sanayi ve ticaretin yoğun olduğu bir ilçe. Bayrampaşa'da yolda kalan araçlar için Bakırköy merkezimizden ekip yönlendiriyoruz.",
    areas: ['Kocatepe', 'Altıntepsi', 'Yıldırım', 'Cevatpaşa'],
    roads: ['E-5 ve TEM bağlantı yolları', 'Bayrampaşa ana caddeleri'],
    situations: [
      'Sanayi ve ticari alanlarda çalışmayan araçlar',
      'Yoğun trafikte arıza ve kaza sonrası araç taşıma',
      'Site ve iş yeri otoparklarında akü takviyesi',
    ],
    neighbors: ['fatih-cekici', 'zeytinburnu-cekici', 'cevizlibag-cekici', 'bagcilar-cekici'],
  },
  {
    slug: 'bagcilar-cekici',
    name: 'Bağcılar',
    district: 'Bağcılar',
    isHome: false,
    intro:
      "Bağcılar, İstanbul'un en yoğun nüfuslu ilçelerinden biri. Bağcılar'da araç arızası, kaza ve yolda kalma durumlarında Bakırköy merkezimizden ekip yönlendiriyor, çekici ve yol yardım hizmeti veriyoruz.",
    areas: ['Güneşli', 'Mahmutbey', 'Yıldıztepe', 'Kirazlı', 'Barbaros'],
    roads: ['TEM bağlantı yolları', 'Mahmutbey hattı', 'Bağcılar ana caddeleri'],
    situations: [
      'Yoğun apartman bölgelerinde aküsü biten araçlar',
      'Ana arterlerde ve TEM bağlantılarında arıza ve kaza',
      'İş merkezi ve sanayi çevresinde bloke olan araçlar',
    ],
    neighbors: ['gungoren-cekici', 'merter-cekici', 'bayrampasa-cekici', 'bahcelievler-cekici'],
  },
];

export function getRegion(slug: string): RegionItem | undefined {
  return REGIONS.find((region) => region.slug === slug);
}

const BACK_VOWELS = 'aıou';
const FRONT_VOWELS = 'eiöü';

/** Turkish locative suffix with vowel harmony: Bakırköy'de, Florya'da. */
export function locative(name: string): string {
  const lower = name.toLocaleLowerCase('tr-TR');
  for (let i = lower.length - 1; i >= 0; i--) {
    if (BACK_VOWELS.includes(lower[i])) return `${name}'da`;
    if (FRONT_VOWELS.includes(lower[i])) return `${name}'de`;
  }
  return `${name}'de`;
}
