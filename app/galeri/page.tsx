import { Playfair_Display } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

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

const GALLERY_IMAGES = [
  '/images/neongaleri1.jpeg',
  '/images/neongaleri2.jpeg',
  '/images/neongaleri3.jpeg',
  '/images/neongaleri4.jpeg',
  '/images/neongaleri5.jpeg',
  '/images/neongaleri6.jpeg',
  '/images/neongaleri7.jpeg',
  '/images/neongaleri8.jpeg',
  '/images/neongaleri9.jpeg',
  '/images/neongaleri10.jpeg',
  '/images/neongaleri11.jpeg',
  '/images/neongaleri12.jpeg',
  '/images/neongaleri13.jpeg',
  '/images/neongaleri14.jpeg',
  '/images/neongaleri15.jpeg',
  '/images/neongaleri16.jpeg',
  '/images/neongaleri17.jpeg',
  '/images/neongaleri18.jpeg',
  '/images/neongaleri19.jpeg',
  '/images/neongaleri20.jpeg',
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
