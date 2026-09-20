import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { ImageWrapper } from '@/components/ui/ImageWrapper';
import { TextLink } from '@/components/ui/TextLink';

export function OperationalFocusSection() {
  return (
    <Section padding="xl">
      <Container size="default">
        <div className="space-y-12 mb-16">
          <Heading level="h2" className="max-w-2xl">
            İstanbul ve Bakırköy Merkezli Saha Operasyonu
          </Heading>

          <Text variant="lead" className="max-w-3xl text-gray-700">
            {SITE_CONFIG.brandName}, Bakırköy merkezli saha erişimi ve donanımlı araç filosu ile İstanbul genelinde hızlı ve güvenli yol yardım hizmeti sunmaktadır.
          </Text>
        </div>

        {/* Large Editorial Full-Width Operational Frame */}
        <ImageWrapper aspectRatio="wide" caption="Bakırköy ve İstanbul Çevresi Gece/Gündüz Saha Operasyonları">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center p-12 text-center text-sm font-medium text-gray-500 tracking-wide">
            NEON Saha Filosu & İstanbul Operasyon Görseli (Full Editorial Frame)
          </div>
        </ImageWrapper>

        <div className="pt-8 flex justify-between items-center">
          <Text variant="small" className="text-gray-500">
            7/24 Donanımlı Çekici ve Araç Kurtarma Kadrosu
          </Text>
          <TextLink href="/hakkimizda" variant="default" className="text-xs font-semibold uppercase tracking-wider">
            Kurumsal Bilgiler &rarr;
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
