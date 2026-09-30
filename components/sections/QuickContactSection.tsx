import { SITE_CONFIG } from '@/data/site';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Divider } from '@/components/ui/Divider';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function QuickContactSection() {
  return (
    <Section padding="sm">
      <Container size="default">
        <Divider margin="none" className="mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4 text-center md:text-left">
          <TrackedPhoneLink
            location="quick_contact"
            className="inline-block bg-[#00BF63] hover:bg-[#00a857] text-white font-extrabold px-6 py-3 text-lg md:text-xl tracking-tight transition-colors"
          >
            {SITE_CONFIG.phone}
          </TrackedPhoneLink>

          <div>
            <WhatsappLocationButton variant="link" className="text-xs font-semibold uppercase tracking-wider">
              Hızlı Konum Gönder &rarr;
            </WhatsappLocationButton>
          </div>
        </div>

        <Divider margin="none" className="mt-8" />
      </Container>
    </Section>
  );
}
