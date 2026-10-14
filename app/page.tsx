import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickContactSection } from '@/components/sections/QuickContactSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { LocationContactSection } from '@/components/sections/LocationContactSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export const metadata = constructMetadata({
  title: 'NEON Oto Kurtarma | İstanbul 7/24 Oto Çekici & Yol Yardım',
  description:
    'NEON Oto Kurtarma, Bakırköy merkezli İstanbul genelinde 7/24 oto çekici, araç kurtarma ve yol yardım hizmeti verir. Hemen arayın veya WhatsApp\'tan konumunuzu gönderin.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickContactSection />
      <ServicesSection />
      <LocationContactSection />
      <FinalCtaSection />
    </>
  );
}
