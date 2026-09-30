import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ImageWrapper } from '@/components/ui/ImageWrapper';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export function HeroSection() {
  return (
    <Section padding="lg">
      <Container size="wide">
        <div className="max-w-4xl space-y-6 md:space-y-8 mb-10 md:mb-16 text-left flex flex-col items-start">
          <Heading level="display" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Yolda kaldığınızda hareket <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>devam eder.</span>
          </Heading>

          <Text variant="lead" className="max-w-2xl text-gray-700 text-base md:text-xl">
            {SITE_CONFIG.brandName}, İstanbul ve Bakırköy genelinde 7/24 oto çekici, araç kurtarma ve acil yol yardım operasyonlarını kesintisiz sürdürür.
          </Text>

          {/* Restrained CTA Hierarchy: Mobile vs Desktop Layout */}
          {/* Mobile View (sm:hidden): Top Green Box for Location + Centered Black Phone Text Below */}
          <div className="flex flex-col gap-3 pt-2 w-full sm:hidden items-center text-center">
            <WhatsappLocationButton
              variant="button"
              className="w-full min-h-[52px] px-6 text-base font-extrabold text-white bg-[#00BF63] hover:bg-[#00a857] transition-colors rounded-none flex items-center justify-center gap-2 shadow-md"
            >
              Hızlı Konum Gönder (7/24) &rarr;
            </WhatsappLocationButton>

            <TrackedPhoneLink
              location="hero"
              className="w-full text-center py-2 text-xl font-extrabold text-black hover:text-[#00BF63] transition-colors tracking-tight block"
            >
              {SITE_CONFIG.phone}
            </TrackedPhoneLink>
          </div>

          {/* Desktop View (hidden sm:flex): Green Phone Button + Kutusuz WhatsApp Link */}
          <div className="hidden sm:flex sm:flex-row items-center gap-6 pt-4 w-auto">
            <TrackedPhoneLink location="hero" className="w-auto">
              <Button
                variant="accent"
                size="lg"
                className="min-h-[52px] bg-[#00BF63] hover:bg-[#00a857] text-white border-none font-bold text-lg px-8"
              >
                {SITE_CONFIG.phone}
              </Button>
            </TrackedPhoneLink>
            <WhatsappLocationButton
              variant="link"
              className="text-sm font-semibold text-black hover:text-[#00BF63] transition-colors py-2"
            >
              Hızlı Konum Gönder (7/24) &rarr;
            </WhatsappLocationButton>
          </div>
        </div>

        {/* Large-Scale Editorial Photography Frame */}
        <ImageWrapper aspectRatio="wide">
          <Image
            src="/images/neongaleri20.jpeg"
            alt="NEON Oto Kurtarma Saha Operasyon Filosu"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-[center_70%]"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
}
