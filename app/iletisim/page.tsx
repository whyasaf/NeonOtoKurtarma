import Image from 'next/image';
import { SITE_CONFIG } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export const metadata = constructMetadata({
  title: 'İletişim & Lokasyon | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma 7/24 direk telefon (0545 154 19 10) ve WhatsApp konum paylaşım hattı. Bakırköy merkezli İstanbul oto kurtarma ve acil yol yardım.',
  path: '/iletisim',
});

export default function IletisimPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-14 md:pb-20">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              İhtiyacınız olduğunda, buradayız.
            </h1>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal pt-2">
              Bulunduğunuz konumu ve ihtiyacınızı bize iletin. Size uygun desteği sağlayalım.
            </p>

            {/* Editorial Typographic Actions & WhatsApp GPS Location Prototype */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="bg-[#00BF63] hover:bg-[#00a857] text-white font-bold px-8 py-4 text-base tracking-wide transition-colors inline-block text-center"
              >
                {SITE_CONFIG.phone}
              </a>
              <WhatsappLocationButton variant="link" />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. İletişim Bilgileri Section */}
      <section className="border-t border-[#E5E5E5] py-14 md:py-20">
        <Container size="wide">
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-10">
            İLETİŞİM BİLGİLERİ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Column 1: Company & Official Address */}
            <div className="space-y-6 max-w-lg">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#666666] uppercase mb-2">
                  
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black uppercase mb-3">
                  NEON OTO KURTARMA
                </h2>
                <div className="text-base md:text-lg text-[#333333] font-medium leading-snug space-y-1 border-l-2 border-[#00BF63] pl-4 py-0.5">
                  <p className="font-semibold text-black">{SITE_CONFIG.location.streetAddress}</p>
                  <p>{SITE_CONFIG.location.neighborhood}, {SITE_CONFIG.location.district}</p>
                  <p className="text-[#666666] text-sm">{SITE_CONFIG.location.city} / {SITE_CONFIG.location.country}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5E5E5] flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#555555]">
                <div>
                  <span className="font-semibold text-black block text-xs uppercase tracking-wider">Hizmet Bölgesi</span>
                  <span>Bakırköy &amp; Tüm İstanbul</span>
                </div>
                <div>
                  <span className="font-semibold text-black block text-xs uppercase tracking-wider">Çalışma Saatleri</span>
                  <span className="text-[#00BF63] font-bold">7/24 Hizmet</span>
                </div>
              </div>
            </div>

            {/* Column 2: Editorial Image */}
            <div className="flex items-center justify-start md:justify-end">
              <Image
                src="/images/neoniletisim.png"
                alt="NEON Oto Kurtarma İletişim Görseli"
                width={720}
                height={480}
                priority
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Konum / Google Maps Section */}
      <section className="border-t border-[#E5E5E5] py-14 md:py-20">
        <Container size="wide">
          <div className="max-w-2xl mb-8 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase">
              BAKIRKÖY / İSTANBUL
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
              Bizi bulun.
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">
              Bakırköy merkezli olarak İstanbul ve çevre ilçelerde oto kurtarma ve yol yardım hizmeti sunuyoruz.
            </p>
            <p className="text-sm md:text-base font-semibold text-black pt-1">
              {SITE_CONFIG.location.formattedAddress}
            </p>
          </div>

          {/* Responsive Map Embed */}
          <div className="w-full mt-8">
            <div className="w-full h-[340px] sm:h-[400px] md:h-[480px] border border-[#E5E5E5] overflow-hidden bg-gray-100">
              <iframe
                title="NEON Oto Kurtarma Bakırköy Lokasyonu"
                src="https://maps.google.com/maps?q=%C3%87a%C4%9F+Sokak+No:22,+Zuhuratbaba,+Bak%C4%B1rk%C3%B6y,+%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="pt-4">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-semibold text-black hover:text-[#00BF63] underline underline-offset-8 transition-colors inline-block"
              >
                Google Maps&apos;te Yol Tarifi Al &rarr;
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Hızlı Ulaşım Section (2 Large Editorial Communication Rows, No Cards) */}
      <section className="border-t border-[#E5E5E5] py-14 md:py-20">
        <Container size="wide">

          <div className="space-y-12">
            {/* Row 1: TELEFON */}
            <div className="border-b border-[#E5E5E5] pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider text-[#666666] uppercase">
                  TELEFON
                </p>
                <a
                  href={SITE_CONFIG.phoneTelLink}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black hover:text-[#00BF63] transition-colors block tracking-tight"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <a
                  href={SITE_CONFIG.phoneTelLink}
                  className="inline-flex items-center text-base md:text-lg font-bold text-[#00BF63] hover:underline gap-2 group"
                >
                  <span>Ara</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Row 2: WHATSAPP */}
            <div className="border-b border-[#E5E5E5] pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold tracking-wider text-[#666666] uppercase">
                  WHATSAPP
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#333333] font-semibold leading-relaxed">
                  Konumunuzu ve araçla ilgili kısa bilgiyi WhatsApp üzerinden gönderin.
                </p>
              </div>
              <div>
                <WhatsappLocationButton variant="link" />
              </div>
            </div>

            {/* Row 3: E-POSTA / ŞİKAYET & ÖNERİ */}
            <div className="pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold tracking-wider text-[#666666] uppercase">
                  ŞİKAYET &amp; ÖNERİ / E-POSTA
                </p>
                <a
                  href={SITE_CONFIG.emailLink}
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black hover:text-[#00BF63] transition-colors block tracking-tight"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <a
                  href={SITE_CONFIG.emailLink}
                  className="inline-flex items-center text-base md:text-lg font-bold text-[#00BF63] hover:underline gap-2 group whitespace-nowrap"
                >
                  <span>E-Posta Gönder</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
