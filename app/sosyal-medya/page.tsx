import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Heading, Text } from '@/components/ui/Typography';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Sosyal Medya & Dijital Topluluk | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma Instagram, TikTok ve YouTube hesaplarımız. 38.000+ takipçili dijital topluluğumuz ve canlı saha operasyon videolarımız.',
  path: '/sosyal-medya',
});

export default function SosyalMedyaPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.08]">
              Sahada ve dijitalde{' '}
              <br />
              <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>
                38.000+ takipçi.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-normal max-w-2xl">
              İstanbul genelindeki oto kurtarma operasyonlarımızı, zorlu kaza müdahalelerini ve gerçek saha çekimlerimizi sosyal medyada şeffaflıkla paylaşıyoruz.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. ZARA-STYLE ULTRA-MINIMAL 3'LÜ PLATFORM KARTLARI (Tek Renk Siyah) */}
      <section className="py-20 md:py-28 border-b border-[#E5E5E5] bg-white">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header Title */}
            <div className="text-center space-y-3 mb-12">
              <Heading level="h2" className="text-black text-3xl md:text-5xl font-extrabold tracking-tight">
                Bizi dilediğiniz platformdan{' '}
                <span className={`${playfair.className} italic font-normal text-[#00BF63]`}>
                  takip edin.
                </span>
              </Heading>
              <Text variant="body" className="text-[#666666] max-w-xl mx-auto">
                Tüm platformlarda aktif olarak gerçekleştirdiğimiz canlı çekici ve kurtarma operasyonlarımızı paylaşıyoruz.
              </Text>
            </div>

            {/* BLOCK 1: INSTAGRAM (Single Color Black Border & Badge, rounded-[10px]) */}
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-black/30 hover:border-black rounded-[10px] p-8 md:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* Sol Üst: Line Icon & Title */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-black">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-base font-bold uppercase tracking-[0.2em] text-black">
                    INSTAGRAM
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-black border border-black/30 px-3 py-1 bg-gray-50">
                  15.000+ TAKİPÇİ
                </span>
              </div>

              {/* Minimal Text Content */}
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold text-[#888888] tracking-widest uppercase block">
                  @neonotokurtarma
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight group-hover:text-[#00BF63] transition-colors">
                  Saha Operasyonları & Canlı Reels Hikayeleri
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed max-w-2xl">
                  İstanbul genelindeki canlı kurtarma müdahalelerimiz, gece-gündüz çekici operasyonlarımız ve öne çıkan saha Reels çekimlerimiz.
                </p>
              </div>

              {/* Bottom Action & Neon Logo */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-black group-hover:text-[#00BF63] group-hover:translate-x-1.5 transition-all gap-2">
                  <span>Instagram&apos;da Takip Et</span>
                  <span>&rarr;</span>
                </span>

                {/* Right Bottom NEON Badge */}
                <div className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-[6px] bg-white">
                  <Image
                    src="/images/neonlogo.png"
                    alt="NEON Logo"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                    NEON <span className="text-[#00BF63]">OTO KURTARMA</span>
                  </span>
                </div>
              </div>
            </a>

            {/* BLOCK 2: TIKTOK (Single Color Black Border & Badge, rounded-[10px]) */}
            <a
              href={SITE_CONFIG.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-black/30 hover:border-black rounded-[10px] p-8 md:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* Sol Üst: Line Icon & Title */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-black">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.12 6.2 6.34 6.34 0 1 0 11.46-3.8V9.17a8.27 8.27 0 0 0 4.77 1.52V7.24a4.84 4.84 0 0 1-1-.55z" />
                    </svg>
                  </div>
                  <span className="text-base font-bold uppercase tracking-[0.2em] text-black">
                    TIKTOK
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-black border border-black/30 px-3 py-1 bg-gray-50">
                  8.000+ TAKİPÇİ
                </span>
              </div>

              {/* Minimal Text Content */}
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold text-[#888888] tracking-widest uppercase block">
                  @neonotokurtarma
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight group-hover:text-[#00BF63] transition-colors">
                  Aksiyon & Yüksek Tempolu Saha Videoları
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed max-w-2xl">
                  Zorlu hava koşullarında gerçekleştirdiğimiz hızlı araç kurtarma operasyonları, trend tempolu videolar ve saha paylaşımlarımız.
                </p>
              </div>

              {/* Bottom Action & Neon Logo */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-black group-hover:text-[#00BF63] group-hover:translate-x-1.5 transition-all gap-2">
                  <span>TikTok&apos;ta Takip Et</span>
                  <span>&rarr;</span>
                </span>

                {/* Right Bottom NEON Badge */}
                <div className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-[6px] bg-white">
                  <Image
                    src="/images/neonlogo.png"
                    alt="NEON Logo"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                    NEON <span className="text-[#00BF63]">OTO KURTARMA</span>
                  </span>
                </div>
              </div>
            </a>

            {/* BLOCK 3: YOUTUBE (Single Color Black Border & Badge, rounded-[10px]) */}
            <a
              href={SITE_CONFIG.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-black/30 hover:border-black rounded-[10px] p-8 md:p-10 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* Sol Üst: Line Icon & Title */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-black">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span className="text-base font-bold uppercase tracking-[0.2em] text-black">
                    YOUTUBE
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-black border border-black/30 px-3 py-1 bg-gray-50">
                  15.000+ ABONE
                </span>
              </div>

              {/* Minimal Text Content */}
              <div className="space-y-2 mb-8">
                <span className="text-xs font-semibold text-[#888888] tracking-widest uppercase block">
                  @neonotokurtarma
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight group-hover:text-[#00BF63] transition-colors">
                  Detaylı Operasyon & Yol Yardım Vlogları
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed max-w-2xl">
                  VIP araç taşıma süreçleri, zorlu çekici senaryoları ve sürücüler için bilgilendirici uzun metraj vlog içeriklerimiz.
                </p>
              </div>

              {/* Bottom Action & Neon Logo */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-black group-hover:text-[#00BF63] group-hover:translate-x-1.5 transition-all gap-2">
                  <span>YouTube&apos;da Abone Ol</span>
                  <span>&rarr;</span>
                </span>

                {/* Right Bottom NEON Badge */}
                <div className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-[6px] bg-white">
                  <Image
                    src="/images/neonlogo.png"
                    alt="NEON Logo"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                    NEON <span className="text-[#00BF63]">OTO KURTARMA</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* 3. ZARA-STYLE MINIMALIST CTA BANNER */}
      <section className="py-20 md:py-28 bg-black text-white">
        <Container size="default">
          <div className="text-left space-y-8 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00BF63]">
              NEON OTO KURTARMA &bull; DİJİTAL TOPLULUK
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight">
              38.000+ SÜRÜCÜYLE{' '}
              <span className={`${playfair.className} italic font-normal text-[#00BF63] lowercase`}>
                büyüyen topluluk.
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal max-w-2xl">
              Günlük canlı kurtarma paylaşımları, reels çekimleri ve yol yardım içerikleri için sosyal medyanın her platformundan bize katılabilirsiniz.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#00BF63] transition-colors inline-flex items-center gap-2"
              >
                <span>Instagram</span>
                <span>&rarr;</span>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#00BF63] transition-colors inline-flex items-center gap-2"
              >
                <span>TikTok</span>
                <span>&rarr;</span>
              </a>
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-[#00BF63] transition-colors inline-flex items-center gap-2"
              >
                <span>YouTube</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}


