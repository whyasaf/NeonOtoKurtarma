import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { SERVICES_DATA } from '@/data/services';
import { constructMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/services/FaqAccordion';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Hizmetlerimiz | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma 7/24 oto kurtarma ve yol yardım hizmetleri: Arıza/kaza çekici, VIP transfer, akü takviye ve lastik değişimi.',
  path: '/hizmetler',
});

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'KONUM PAYLAŞIMI',
    description:
      'Telefon veya WhatsApp üzerinden bulunduğunuz konumu bize iletin.',
  },
  {
    step: '02',
    title: 'EKİP YÖNLENDİRMESİ',
    description:
      'İhtiyacınıza uygun hizmet için ekip yönlendirmesi yapılır.',
  },
  {
    step: '03',
    title: 'GÜVENLİ MÜDAHALE',
    description:
      'Aracınıza ihtiyaç duyulan yol yardım veya taşıma hizmeti sağlanır.',
  },
];

export default function HizmetlerPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-14 md:pb-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              Yolda kaldığınızda, <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>hareket devam eder.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal pt-2">
              Oto kurtarma, çekici, akü takviye ve acil yol yardım hizmetlerinde 7/24 kesintisiz saha desteği.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <a href={SITE_CONFIG.phoneTelLink} className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto min-h-[52px] bg-[#00BF63] hover:bg-[#00a857] text-white border-none">
                  0545 154 19 10
                </Button>
              </a>
              <WhatsappLocationButton variant="link" className="text-sm font-semibold py-2">
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Editorial Services List (5 Core Services) */}
      <section className="py-12 md:py-20">
        <Container size="wide">
          <div className="space-y-16 md:space-y-24">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={service.slug}
                className="border-b border-[#E5E5E5] pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start scroll-mt-28"
              >
                {/* Number & Title */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#00BF63] block">
                    {service.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black">
                    {service.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {service.meta.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] font-semibold tracking-wider text-[#666666] uppercase border border-[#E5E5E5] px-2.5 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description & Action */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base md:text-lg lg:text-xl text-[#444444] leading-relaxed font-normal">
                    {service.description}
                  </p>
                  <div>
                    <a
                      href={SITE_CONFIG.phoneTelLink}
                      className="inline-flex items-center text-sm font-bold text-white bg-[#00BF63] hover:bg-[#00a857] px-5 py-2.5 transition-colors gap-2 group"
                    >
                      <span>Hizmet Talebi Oluştur ({SITE_CONFIG.phone})</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Process Section (3 Steps) */}
      <section className="py-14 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-3">
              OPERASYON SÜRECİ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              Nasıl Çalışıyoruz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {PROCESS_STEPS.map((proc) => (
              <div key={proc.step} className="space-y-4">
                <span className="text-2xl md:text-3xl font-extrabold text-[#00BF63] block">
                  {proc.step}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-black">
                  {proc.title}
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed font-normal">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24">
        <Container size="wide">
          <div className="max-w-xl mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-3">
              BİLGİ REHBERİ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <FaqAccordion />
        </Container>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 md:py-28 border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-tight whitespace-pre-line">
              {'YOLDA KALDIĞINIZDA\nBİZE ULAŞIN.'}
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="bg-[#00BF63] hover:bg-[#00a857] text-white font-bold px-8 py-4 text-base md:text-lg tracking-wide transition-colors inline-block text-center"
              >
                {SITE_CONFIG.phone}
              </a>
              <WhatsappLocationButton
                variant="link"
                className="text-sm md:text-base font-semibold text-black hover:text-[#00BF63] transition-colors"
              >
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
