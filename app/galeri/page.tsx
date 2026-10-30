import { Playfair_Display } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { GalleryGrid, type GalleryImage } from '@/components/gallery/GalleryGrid';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Galeri & Saha Kataloğu | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma 7/24 araç kurtarma, oto çekici, VIP transfer ve saha operasyonlarımızdan editorial fotoğraf kataloğu.',
  path: '/galeri',
});

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/neongaleri2.jpeg',
    alt: 'Şehir içinde bariyer kenarında kayar kasa çekici üzerinde taşınan siyah coupe tipi araç',
  },
  {
    src: '/images/neongaleri3.jpeg',
    alt: 'Kayar kasa çekici üzerine yüklenmiş siyah SUV araç',
  },
  {
    src: '/images/neongaleri12.jpeg',
    alt: 'Aydınlatmalı bir alanda kayar kasa çekici üzerinde taşınan beyaz sedan araç',
  },
  {
    src: '/images/neongaleri20.jpeg',
    alt: 'Yüksek binanın önünde siyah araç taşıyan kayar kasa çekici',
  },
  {
    src: '/images/neongaleri1.jpeg',
    alt: 'Gece, kayar kasa çekici üzerinde taşınan gri coupe tipi araç',
  },
  {
    src: '/images/neongaleri4.jpeg',
    alt: 'Oto servis dükkanlarının önünde kayar kasa çekici üzerinde taşınan siyah minibüs',
  },
  {
    src: '/images/neongaleri5.jpeg',
    alt: 'Gün batımında kayar kasa çekici üzerinde taşınan beyaz hatchback araç',
  },
  {
    src: '/images/neongaleri6.jpeg',
    alt: 'Gece, ışıkları yanan kayar kasa çekici üzerinde taşınan siyah sedan araç',
  },
  {
    src: '/images/neongaleri7.jpeg',
    alt: 'Gece arkadan görünüm: kayar kasa çekici üzerinde taşınan siyah araç ve çekici stop lambaları',
  },
  {
    src: '/images/neongaleri8.jpeg',
    alt: 'Güneşli bir sokakta kayar kasa çekici üzerinde taşınan koyu renk panelvan araç',
  },
  {
    src: '/images/neongaleri9.jpeg',
    alt: 'Apartman önünde kayar kasa çekici üzerinde taşınan beyaz araç',
  },
  {
    src: '/images/neongaleri10.jpeg',
    alt: 'Oto servis atölyesinde kayar kasa çekici üzerinde taşınan beyaz hatchback araç',
  },
  {
    src: '/images/neongaleri11.jpeg',
    alt: 'Akşam saatlerinde mahalle caddesinde kayar kasa çekici üzerinde taşınan siyah araç',
  },
  {
    src: '/images/neongaleri13.jpeg',
    alt: 'Kayar kasa çekici üzerinde taşınan yeşil renkli klasik station wagon araç',
  },
  {
    src: '/images/neongaleri14.jpeg',
    alt: 'Akaryakıt istasyonunda kayar kasa çekici üzerinde taşınan küçük iş makinesi',
  },
  {
    src: '/images/neongaleri15.jpeg',
    alt: 'Sokakta kayar kasa çekici üzerine yüklenen küçük ekskavatör',
  },
  {
    src: '/images/neongaleri16.jpeg',
    alt: 'Kayar kasa çekici üzerinde taşınan gri renkli minibüs',
  },
  {
    src: '/images/neongaleri17.jpeg',
    alt: 'Gece, ışıkları yanan kayar kasa çekici üzerinde taşınan koyu renk sedan araç',
  },
  {
    src: '/images/neongaleri18.jpeg',
    alt: 'Gece sokakta park halindeki, uyarı ışıkları yanan boş kayar kasa çekici',
  },
  {
    src: '/images/neongaleri19.jpeg',
    alt: 'Yüksek binanın önünde brandayla örtülü bir araç taşıyan kayar kasa çekici',
  },
];

export default function GaleriPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Editorial Header Section */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              NEON <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>Galeri</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal pt-2">
              İstanbul genelinde gerçekleştirdiğimiz oto kurtarma, çekici ve yol yardım operasyonlarımızdan canlı kareler.
            </p>
          </div>
        </Container>
      </section>

      {/* High-Fashion Catalog Gallery Section */}
      <section className="py-14 md:py-20">
        <Container size="wide">
          <GalleryGrid images={GALLERY_IMAGES} />
        </Container>
      </section>
    </main>
  );
}
