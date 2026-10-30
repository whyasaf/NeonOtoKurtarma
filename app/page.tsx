import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/data/site';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickContactSection } from '@/components/sections/QuickContactSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { RegionsSection } from '@/components/sections/RegionsSection';
import { LocationContactSection } from '@/components/sections/LocationContactSection';
import { HomeFaqSection } from '@/components/sections/HomeFaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export const metadata = constructMetadata({
  title: SITE_CONFIG.defaultMeta.title,
  description: SITE_CONFIG.defaultMeta.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickContactSection />
      <ServicesSection />
      <RegionsSection />
      <LocationContactSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </>
  );
}
