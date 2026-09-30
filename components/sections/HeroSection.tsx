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

          {/* Restrained CTA Hierarchy: Main Green Phone Button + WhatsApp Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2 md:pt-4 w-full sm:w-auto">
            <TrackedPhoneLink location="hero" className="w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] bg-[#00BF63] hover:bg-[#00a857] text-white border-none font-bold text-base md:text-lg"
              >
                0545 154 19 10
              </Button>
            </TrackedPhoneLink>
            <WhatsappLocationButton
              variant="button"
              className="w-full sm:w-auto min-h-[52px] sm:min-h-0 px-6 sm:px-0 text-sm sm:text-sm font-bold sm:font-semibold text-white sm:text-black bg-[#00BF63] sm:bg-transparent hover:bg-[#00a857] sm:hover:bg-transparent sm:hover:text-[#00BF63] transition-colors rounded-none flex items-center justify-center gap-2 shadow-sm sm:shadow-none"
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
