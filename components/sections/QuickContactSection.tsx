import { SITE_CONFIG } from '@/data/site';
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
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            7/24 Kesintisiz Saha Operasyonu
          </div>

          <a
            href={SITE_CONFIG.phoneTelLink}
            className="text-2xl md:text-3xl font-bold tracking-tight text-black hover:text-[#00BF63] transition-colors"
          >
            {SITE_CONFIG.phone}
          </a>

          <div>
            <WhatsappLocationButton variant="link" className="text-xs font-semibold uppercase tracking-wider">
              WhatsApp Konum Gönder &rarr;
            </WhatsappLocationButton>
          </div>
        </div>

        <Divider margin="none" className="mt-8" />
      </Container>
    </Section>
  );
}
