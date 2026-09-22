import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
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
    <Section padding="xl">
      <Container size="default">
        <div className="max-w-4xl space-y-8 mb-16">
          <Text variant="caption" className="text-gray-400">
            NEON OTO KURTARMA &bull; İSTANBUL 7/24
          </Text>

          <Heading level="display">
            Yolda kaldığınızda hareket <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>devam eder.</span>
          </Heading>

          <Text variant="lead" className="max-w-2xl text-gray-700">
            {SITE_CONFIG.brandName}, İstanbul ve Bakırköy genelinde 7/24 oto çekici, araç kurtarma ve acil yol yardım operasyonlarını kesintisiz sürdürür.
          </Text>

          {/* Restrained CTA Hierarchy: Primary Phone Button + Subtle WhatsApp Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <a href={SITE_CONFIG.phoneTelLink} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-h-[52px]">
                0545 154 19 10
              </Button>
            </a>
            <WhatsappLocationButton
              variant="link"
              className="text-sm font-semibold py-2"
            >
              Hızlı Konum Gönder (7/24) &rarr;
            </WhatsappLocationButton>
          </div>
        </div>

        {/* Large-Scale Editorial Photography Frame */}
        <ImageWrapper aspectRatio="wide" caption="Saha Operasyon Filosu ve Yol Yardım Ekibi — İstanbul">
          <Image
            src="/images/neongaleri20.jpeg"
            alt="NEON Oto Kurtarma Saha Operasyon Filosu"
            fill
            priority
            className="object-cover object-[center_70%]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
}
