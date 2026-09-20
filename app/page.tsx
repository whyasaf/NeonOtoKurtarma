import { constructMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickContactSection } from '@/components/sections/QuickContactSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { OperationalFocusSection } from '@/components/sections/OperationalFocusSection';
import { LocationContactSection } from '@/components/sections/LocationContactSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export const metadata = constructMetadata({
  title: 'NEON Oto Kurtarma | İstanbul 7/24 Oto Çekici & Yol Yardım',
  description:
    'NEON Oto Kurtarma, İstanbul genelinde 7/24 oto kurtarma ve yol yardım hizmeti sunar. Oto çekici, kaza yardımı ve yol yardım desteği için bize ulaşın.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickContactSection />
      <ServicesSection />
      <OperationalFocusSection />
      <LocationContactSection />
      <FinalCtaSection />
    </>
  );
}
