import { SERVICES_DATA } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Typography';
import { TextLink } from '@/components/ui/TextLink';
import { Divider } from '@/components/ui/Divider';

export function ServicesSection() {
  return (
    <Section padding="xl">
      <Container size="default">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <Heading level="h2" className="max-w-xl">
            Hizmet Alanlarımız
          </Heading>
          <TextLink href="/hizmetler" variant="default" className="text-xs font-semibold uppercase tracking-wider">
            Tüm Hizmet Detayları &rarr;
          </TextLink>
        </div>

        {/* High-Contrast Typographic Editorial List */}
        <div className="border-t border-gray-200">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id}>
              <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-1 text-xs font-semibold tracking-widest text-gray-400">
                  0{index + 1}
                </div>
                <div className="md:col-span-5 text-2xl md:text-3xl font-bold tracking-tight text-black">
                  {service.title}
                </div>
                <div className="md:col-span-4 text-gray-600 text-base leading-relaxed">
                  {service.shortDescription}
                </div>
                <div className="md:col-span-2 text-left md:text-right">
                  <TextLink href="/hizmetler" variant="subtle" className="text-xs font-semibold uppercase tracking-wider">
                    İncele
                  </TextLink>
                </div>
              </div>
              <Divider margin="none" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
