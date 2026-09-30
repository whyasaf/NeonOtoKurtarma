'use client';

import { useState } from 'react';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Typography';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  fullComment: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Elanur A***',
    location: 'Bakırköy, İstanbul',
    rating: 5,
    date: 'Eylül 2026',
    service: 'Hızlı Çekici Kurtarma',
    comment: 'Hızlıydı. Yaklaşık 10 dakika gibi bir sürede yanıma ulaşıp hemen aracımı kurtardılar...',
    fullComment: 'Hızlıydı. Yaklaşık 10 dakika gibi bir sürede yanıma ulaşıp hemen aracımı kurtardılar. Memnun kaldım teşekkürler.',
  },
  {
    id: 2,
    name: 'Uğur B***',
    location: 'Ataköy, Bakırköy',
    rating: 5,
    date: 'Eylül 2026',
    service: 'Akü Takviye Hizmeti',
    comment: 'Akü takviyesi için teşekkürler. Aracımın dörtlülerini açık unuttuğum için aküm bitmiş...',
    fullComment: 'Akü takviyesi için teşekkürler. Aracımın dörtlülerini açık unuttuğum için aküm bitmiş. Kısa bir süre içinde gelip Powerbank tarzı bir ekipmanla aracımı çalıştırdılar. Fiyat gayet makuldü.',
  },
  {
    id: 3,
    name: 'Ömer Asaf A***',
    location: 'Florya, İstanbul',
    rating: 5,
    date: 'Ağustos 2026',
    service: 'Özel Çekici Kurtarma',
    comment: 'Park halinde arızalanan aracım. Aracım çalışmadı, bir kaç tane çekici geldi fakat...',
    fullComment: 'Park halinde arızalanan aracım. Aracım çalışmadı, bir kaç tane çekici geldi fakat park yerinden çıkaramadıkları için geri gittiler. Neon oto kurtarma gayet pratik şekilde aracı yükledi. Çok teşekkürler.',
  },
  {
    id: 4,
    name: 'Furkan Z***',
    location: 'Yeşilköy, Bakırköy',
    rating: 5,
    date: 'Ağustos 2026',
    service: 'Basık Araç Çekici',
    comment: 'Basık araba sorunu. Aracım yere yakın olduğu için aradığım çoğu çekici alamayacağını söyledi...',
    fullComment: 'Basık araba sorunu. Aracım yere yakın olduğu için aradığım çoğu çekici alamayacağını söyledi. Neon oto kurtarma aracıma zarar vermeden sorunsuz şekilde aldı. Emeğiniz için teşekkürler.',
  },
  {
    id: 5,
    name: 'Serkan Y***',
    location: 'Küçükçekmece, İstanbul',
    rating: 5,
    date: 'Ağustos 2026',
    service: 'Gece Kurtarma Hizmeti',
    comment: 'Gece vakti otobanda arızalandım. Konum gönderdikten kısa süre sonra geldiler...',
    fullComment: 'Gece vakti otobanda arızalandım. Konum gönderdikten kısa süre sonra geldiler. Çekici şoförü arkadaş çok dikkatli ve deneyimliydi. Yol ortasında kalma stresinden kurtardığınız için minnettarım.',
  },
  {
    id: 6,
    name: 'Merve & Kaan T***',
    location: 'Basın Ekspres, Bakırköy',
    rating: 5,
    date: 'Temmuz 2026',
    service: '7/24 Yol Yardım',
    comment: 'Şehir dışı yolculuğu öncesi aracımız durdu. WhatsApp konum paylaşımı çok pratikti...',
    fullComment: 'Şehir dışı yolculuğu öncesi Basın Ekspres üzerinde aracımız durdu. WhatsApp konum paylaşımı çok pratikti. Ortalama 15 dakikada yanımıza ulaşıp aracı en yakın servise ulaştırdılar.',
  },
  {
    id: 7,
    name: 'Gökhan D***',
    location: 'Zeytinburnu, İstanbul',
    rating: 5,
    date: 'Temmuz 2026',
    service: 'Otomatik Vites Taşıma',
    comment: 'Otomatik vites aracımın şanzıman arızası vardı. Özel ekipmanla hasarsız yükleme yapıldı...',
    fullComment: 'Otomatik vites aracımın şanzıman arızası vardı. Teferruatlı bir taşıma gerekiyordu, özel ekipmanla tekerleklere zarar vermeden pratik şekilde yüklediler. Profesyonellik tam puan.',
  },
  {
    id: 8,
    name: 'Bihter N***',
    location: 'Bahçelievler, İstanbul',
    rating: 5,
    date: 'Temmuz 2026',
    service: 'Lastik Değişimi & Yardım',
    comment: 'Çivinin batması sonucu lastiğim indi. Ne yapacağımı bilemezken hızlıca yardım ulaştı...',
    fullComment: 'Çivinin batması sonucu lastiğim indi. Yedek lastiğimi takmak için NEON Oto Kurtarma’yı aradım. Arkadaş çok kısa sürede gelip işlemi hızlıca halletti. Güler yüzlü ve dürüst esnaflık.',
  },
  {
    id: 9,
    name: 'Selin & Hakan K***',
    location: 'Zeytinburnu, İstanbul',
    rating: 5,
    date: 'Haziran 2026',
    service: 'Kaza Sonrası Kurtarma',
    comment: 'Ufak bir kaza sonrası aracımız hareket edemez hale gelmişti. Stresli anımızda çok destek oldular...',
    fullComment: 'Ufak bir kaza sonrası aracımız hareket edemez hale gelmişti. Stresli anımızda öyle hızlı ve sakin yaklaştılar ki içimiz çok rahat etti. Sigorta ve servis sürecinde de rehberlik ettiler. Harika bir ekip.',
  },
  {
    id: 10,
    name: 'Tolga B***',
    location: 'Bahçelievler, İstanbul',
    rating: 5,
    date: 'Haziran 2026',
    service: 'Şehir İçi Oto Çekici',
    comment: 'Sosyal medyada videolarını takip ediyordum, başıma bir iş geldiğinde doğrudan onları aradım...',
    fullComment: 'Sosyal medyada videolarını takip ediyordum, başıma bir iş geldiğinde doğrudan onları aradım. Videolardaki şeffaflık ve profesyonellik sahada birebir aynı. NEON kalite standartlarından ödün vermiyor.',
  },
  {
    id: 11,
    name: 'Emrah S***',
    location: 'Avcılar, İstanbul',
    rating: 5,
    date: 'Mayıs 2026',
    service: 'VIP Araç Taşıma',
    comment: 'Sıfır km aracımı bayi çıkışında servise taşıttım. Tek bir çizik bile yoktu...',
    fullComment: 'Sıfır km aracımı bayi çıkışında servise taşıttım. Yükleme esnasında gösterilen özen ve hassasiyet taktiri hak ediyor. Tek bir çizik bile oluşmadan teslim ettiler.',
  },
  {
    id: 12,
    name: 'Cemil H***',
    location: 'Yenibosna, İstanbul',
    rating: 5,
    date: 'Mayıs 2026',
    service: '7/24 Acil Yol Yardım',
    comment: 'Gece vakti yakıtım bitti ve yolda kaldım. İletişime geçtikten kısa süre sonra destek sağlandı...',
    fullComment: 'Gece vakti yakıtım bitti ve yolda kaldım. İletişime geçtikten kısa süre sonra gerekli yol yardım desteği sağlandı. Hem nazik hem de tam bir çözüm ortağı.',
  },
];

export default function MusteriYorumlariPage() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <main className="bg-white text-black min-h-screen">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 border-b border-[#E5E5E5] bg-gradient-to-b from-gray-50 to-white">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08]">
              Gerçek müşteri{' '}
              <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>
                deneyimleri.
              </span>
            </h1>
            <Text variant="lead" className="text-[#555555] max-w-2xl text-base md:text-xl font-normal pt-1">
              Bakırköy ve İstanbul genelinde sunduğumuz 7/24 oto kurtarma ve yol yardım operasyonlarını bizzat tecrübe eden sürücülerimizin görüşleri.
            </Text>

            {/* Social Proof Metric Bar */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 border-t border-gray-200/80 w-full">
              <div className="flex items-center gap-2">
                <div className="flex text-[#00BF63] text-lg font-bold">
                  ★ ★ ★ ★ ★
                </div>
                <span className="text-sm font-extrabold text-black">
                  5.0 / 5.0 Puan
                </span>
              </div>
              <div className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
                &bull; %100 Müşteri Memnuniyeti
              </div>
              <div className="text-xs font-semibold text-[#777777] uppercase tracking-wider">
                &bull; Bakırköy & İstanbul Genel
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ZARA-STYLE MINIMAL INTERACTIVE REVIEWS GRID */}
      <Section padding="lg" className="bg-white">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="bg-white border border-black/20 hover:border-black rounded-[10px] p-7 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Top Bar: Rating Stars & Service Title */}
                  <div className="border-b border-gray-100 pb-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#00BF63] text-base">
                        {'★'.repeat(review.rating)}
                      </div>
                      <span className="text-[11px] font-medium text-gray-400">
                        {review.date}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#00BF63] uppercase tracking-wider block">
                      {review.service}
                    </div>
                  </div>

                  {/* Comment preview */}
                  <p className="text-sm md:text-base text-[#333333] leading-relaxed font-normal italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Bottom Author & Location */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-black group-hover:text-[#00BF63] transition-colors">
                      {review.name}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">
                      {review.location}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#00BF63] group-hover:translate-x-1 transition-all flex items-center gap-1">
                    Oku &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. CTA BANNER SECTION */}
      <Section padding="lg" className="border-t border-[#E5E5E5] bg-[#F9F9F9]">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              Siz de güvenli bir yolculuk için{' '}
              <span className={`${playfair.className} italic font-normal text-[#00BF63]`}>
                bize ulaşın.
              </span>
            </h2>
            <p className="text-sm md:text-base text-[#666666] max-w-xl mx-auto leading-relaxed">
              7/24 kesintisiz saha ekibimiz ortalama 20 dakika içinde konumunuza ulaşarak acil yol yardım ve çekici desteği sağlar.
            </p>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="text-xs font-bold text-white bg-[#00BF63] hover:bg-[#00a857] px-4 py-2 sm:hidden transition-colors"
              >
                Hemen Ara: 0545 154 19 10 &rarr;
              </a>
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="hidden sm:inline-block bg-[#00BF63] hover:bg-[#00a857] text-white font-extrabold px-8 py-4 text-sm uppercase tracking-wider transition-colors"
              >
                {SITE_CONFIG.phone}
              </a>
              <WhatsappLocationButton
                variant="button"
                className="w-full sm:w-auto min-h-[50px] px-6 text-sm font-bold text-white bg-[#00BF63] hover:bg-[#00a857] transition-colors rounded-none flex items-center justify-center gap-2 shadow-sm"
              >
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modern Modal Popup for Detailed Review Reading */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-[12px] border border-black/30 p-6 md:p-8 max-w-lg w-full shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold p-2"
              aria-label="Kapat"
            >
              &times;
            </button>

            {/* Header Info */}
            <div className="space-y-2 border-b border-gray-100 pb-4 pr-8">
              <div className="flex items-center justify-between">
                <div className="flex text-[#00BF63] text-lg font-bold">★ ★ ★ ★ ★</div>
                <span className="text-xs text-gray-400 font-semibold">{selectedReview.date}</span>
              </div>
              <h3 className="text-xl font-extrabold text-black tracking-tight">
                {selectedReview.name}
              </h3>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <span>{selectedReview.location}</span>
                <span>&bull;</span>
                <span className="text-[#00BF63]">{selectedReview.service}</span>
              </div>
            </div>

            {/* Full Comment */}
            <div className="py-2">
              <p className="text-base text-[#222222] leading-relaxed font-normal italic">
                &ldquo;{selectedReview.fullComment}&rdquo;
              </p>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                NEON OTO KURTARMA &bull; DEĞERLENDİRME
              </span>
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="bg-black hover:bg-[#00BF63] text-white font-bold text-xs uppercase px-5 py-2.5 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
