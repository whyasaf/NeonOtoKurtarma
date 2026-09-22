import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function LocationContactSection() {
  return (
    <Section padding="xl">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Typographic Focal Point */}
          <div className="lg:col-span-6 space-y-6">
            <Text variant="caption" className="text-gray-400">
              MERKEZİ LOKASYON
            </Text>

            <Heading level="display" className="text-black">
              BAKIRKÖY / İSTANBUL
            </Heading>

            <Text variant="lead" className="text-gray-700 max-w-lg">
              {SITE_CONFIG.location.formattedAddress}
            </Text>
          </div>

          {/* Quiet Contact Accessibility */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-16">
            <div>
              <Text variant="caption" className="text-gray-400 mb-2">
                7/24 DOĞRUDAN TELEFON
              </Text>
              <a
                href={SITE_CONFIG.phoneTelLink}
                className="text-3xl md:text-4xl font-bold tracking-tight text-black hover:text-[#00BF63] transition-colors block"
              >
                {SITE_CONFIG.phone}
              </a>
            </div>

            <div>
              <Text variant="caption" className="text-gray-400 mb-2">
                WHATSAPP ANLIK KONUM
              </Text>
              <WhatsappLocationButton variant="link" className="text-base font-semibold">
                Hızlı Konum Gönder &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
