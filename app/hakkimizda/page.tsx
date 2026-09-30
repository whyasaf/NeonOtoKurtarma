import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ImageWrapper } from '@/components/ui/ImageWrapper';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';
import { FeaturedReviewsSection } from '@/components/sections/FeaturedReviewsSection';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Hakkımızda | NEON Oto Kurtarma',
  description:
    '7 yılı aşkın tecrübemizle Bakırköy ve İstanbul genelinde 7/24 hızlı, güvenli ve profesyonel oto kurtarma ve yol yardım hizmeti.',
  path: '/hakkimizda',
});

const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Ortalama 20 Dakikada Konumdayız',
    description:
      '7 yılı aşkın tecrübemizle, Bakırköy ve çevre ilçelere ortalama 20 dakika içinde ulaşıyoruz.',
  },
  {
    number: '02',
    title: 'Her Marka Araca Özenli Müdahale',
    description:
      'Her marka araca özenle müdahale eden profesyonel ekibimizle, güvenli ve hızlı oto kurtarma hizmeti sunuyoruz.',
  },
  {
    number: '03',
    title: 'Şeffaf & Uygun Fiyat Politikası',
    description:
      'Müşteri memnuniyeti, uygun fiyat politikası ve güvenilir hizmet anlayışı bizim için her zaman ön planda.',
  },
  {
    number: '04',
    title: 'Tutku & Detaycı Yaklaşım',
    description:
      'İşimizi severek yapıyor, aracınızın güvenliği için her detaya önem veriyoruz.',
  },
];

const STATS = [
  { value: '7+', label: 'Yıllık Sektör Tecrübesi' },
  { value: '20 Dk.', label: 'Ortalama Ulaşım Süresi' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
  { value: '7/24', label: 'Saha Yol Yardım' },
];

export default function HakkimizdaPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* 1. Hero Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-14 md:pb-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              Aracınızı işini severek yapan <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>kişilere teslim edin.</span>
            </h1>

            <div className="space-y-4 pt-2 max-w-3xl">
              <p className="text-lg md:text-xl text-[#444444] leading-relaxed font-medium">
                7 yılı aşkın sektör tecrübemizle, müşteri memnuniyetini her zaman ön planda tutuyoruz. İşimizi severek, özenle ve titizlikle yapıyor; profesyonel ekibimiz ve son teknoloji ekipmanlarımızla en güvenilir oto kurtarma hizmetini sunuyoruz.
              </p>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed font-normal">
                Her çağrınızda hızlı, güvenli ve çözüm odaklı bir hizmet garantisi veriyoruz.
              </p>
            </div>

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

      {/* 2. Large Editorial Photography Frame */}
      <section className="py-14 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <ImageWrapper aspectRatio="wide">
            <Image
              src="/images/neongaleri10.jpeg"
              alt="NEON Oto Kurtarma Profesyonel Saha Ekibi"
              fill
              priority
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </ImageWrapper>
        </Container>
      </section>

      {/* 3. Neden Bizi Seçmelisiniz? (Why Choose Us - 4 Columns Grid) */}
      <section className="py-16 md:py-24 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-2xl mb-16 space-y-3">
            <Text variant="caption" className="text-[#666666] tracking-widest uppercase">
              NEDEN BİZİ SEÇMELİSİNİZ?
            </Text>
            <Heading level="h2" className="text-black text-3xl md:text-4xl font-extrabold">
              Güvenilir ve profesyonel oto kurtarma anlayışı.
            </Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.number} className="space-y-4 border-l-2 border-[#00BF63] pl-6 py-1">
                <span className="text-2xl md:text-3xl font-extrabold text-[#00BF63] block">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Statistics Highlights Bar */}
      <section className="py-14 md:py-20 bg-gray-50 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2 text-center md:text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight">
                  <span className="text-[#00BF63]">{stat.value}</span>
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#666666]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4.5. Interactive Featured Customer Reviews Section */}
      <FeaturedReviewsSection />

      {/* 5. Second Editorial Photography Section */}
      <section className="py-14 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Heading level="h2" className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
                Her çağrınızda hızlı, güvenli ve çözüm odaklı hizmet.
              </Heading>
              <p className="text-base md:text-lg text-[#555555] leading-relaxed font-normal">
                Bakırköy ve çevresinde yolda kaldığınız her an, tek bir telefon veya anlık konum paylaşımı ile uzman ekibimiz dakikalar içinde yanınızda olur.
              </p>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.phoneTelLink}
                  className="inline-flex items-center text-base font-bold text-white bg-[#00BF63] hover:bg-[#00a857] px-6 py-3 transition-colors gap-2 group"
                >
                  <span>Doğrudan İletişim Hattı ({SITE_CONFIG.phone})</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageWrapper aspectRatio="landscape">
                <Image
                  src="/images/neongaleri14.jpeg"
                  alt="NEON Nöbetçi Filo Operasyonu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ImageWrapper>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
