import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function FinalCtaSection() {
  return (
    <Section padding="2xl" className="border-t border-gray-100">
      <Container size="default">
        <div className="max-w-4xl space-y-8">
          <Text variant="caption" className="text-gray-400">
            7/24 ULAŞILABİLİR
          </Text>

          <Heading level="display" className="text-black">
            Yolda kaldığınızda bize ulaşın.
          </Heading>

          <Text variant="lead" className="text-gray-700 max-w-xl">
            İstanbul genelinde oto çekici, araç kurtarma ve yol yardım desteği için bize dilediğiniz an telefon veya WhatsApp üzerinden ulaşabilirsiniz.
          </Text>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <a href={SITE_CONFIG.phoneTelLink} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto min-h-[52px]">
                0545 154 19 10
              </Button>
            </a>
            <WhatsappLocationButton
              variant="link"
              className="text-sm font-semibold py-2"
            >
              WhatsApp ile Konum Gönder (7/24) &rarr;
            </WhatsappLocationButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
