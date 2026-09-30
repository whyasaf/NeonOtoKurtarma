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
        
        {/* Mobile View (md:hidden): Top Green Box for Location + Centered Black Phone Text Below */}
        <div className="flex flex-col gap-3 py-2 md:hidden items-center text-center">
          <WhatsappLocationButton
            variant="button"
            className="w-full min-h-[52px] px-6 text-base font-extrabold text-white bg-[#00BF63] hover:bg-[#00a857] transition-colors rounded-none flex items-center justify-center gap-2 shadow-md"
          >
            Hızlı Konum Gönder (7/24) &rarr;
          </WhatsappLocationButton>

          <TrackedPhoneLink
            location="quick_contact"
            className="w-full text-center py-2 text-xl font-extrabold text-black hover:text-[#00BF63] transition-colors tracking-tight block"
          >
            {SITE_CONFIG.phone}
          </TrackedPhoneLink>
        </div>

        {/* Desktop View (hidden md:flex): Green Phone Button + WhatsApp Link */}
        <div className="hidden md:flex md:flex-row items-center justify-between gap-6 py-4 text-left">
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
