import { SITE_CONFIG } from '@/data/site';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function LocationContactSection() {
  return (
    <Section padding="lg">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-center lg:text-left">
          {/* Typographic Focal Point */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <Heading level="display" className="text-[#000000] text-3xl sm:text-5xl md:text-6xl">
              BAKIRKÖY / İSTANBUL
            </Heading>

            <Text variant="lead" className="text-gray-700 max-w-lg mx-auto lg:mx-0 text-base md:text-xl">
              {SITE_CONFIG.location.formattedAddress}
            </Text>
          </div>

          {/* Quiet Contact Accessibility */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 pt-2 lg:pt-12">
            <div>
              <TrackedPhoneLink
                location="location_contact"
                className="inline-block bg-[#00BF63] hover:bg-[#00a857] text-white font-extrabold px-7 py-3.5 text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors"
              >
                {SITE_CONFIG.phone}
              </TrackedPhoneLink>
            </div>

            <div>
              <WhatsappLocationButton variant="link" className="text-sm md:text-base font-semibold justify-center lg:justify-start">
                Hızlı Konum Gönder &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
