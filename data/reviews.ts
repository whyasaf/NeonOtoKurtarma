export interface Review {
  id: number;
  /** Public Google display name, shortened to first name + initial. */
  name: string;
  rating: number;
  /** Month the review was posted on Google Maps. */
  date: string;
  /** Short preview shown on the card. */
  comment: string;
  /** Full review text, copied from the Google Maps listing (emojis removed). */
  fullComment: string;
}

// Rating summary shown on the Google Maps listing "Bakırköy Çekici Neon Oto
// Kurtarıcı". Update when the listing changes.
export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 3,
  url: 'https://www.google.com/maps?cid=13357453080096310059',
} as const;

// Only real Google Maps reviews belong here. Never add reviews that did not
// come from a customer on the listing.
export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Uğur B.',
    rating: 5,
    date: 'Ekim 2026',
    comment: 'Bakırköyde hızlı ve güvenilir çekici arayanlara kesinlikle tavsiye ederim.',
    fullComment:
      'Bakırköyde hızlı ve güvenilir çekici arayanlara kesinlikle tavsiye ederim. Güvenin, kalitenin ve profesyonelliğin adresi Neon Oto Kurtarıcı! Zor anlarda hızlı müdahalesi, güler yüzlü yaklaşımı ve güvenilir hizmet anlayışıyla gerçekten fark yaratan bir işletme. Aracınızı gönül rahatlığıyla emanet edebileceğiniz, işini severek ve hakkıyla yapan kaliteli bir ekip. Müşteri memnuniyetini her zaman ön planda tutan, çözüm odaklı ve son derece ilgili bir hizmet anlayışına sahip. Böyle işini düzgün yapan esnafların her zaman desteklenmesi gerektiğine inanıyorum. Kesinlikle tavsiye ederim! Neon Oto Kurtarıcı’ya bol kazançlar, hayırlı işler ve açık yollar diliyorum.',
  },
];
