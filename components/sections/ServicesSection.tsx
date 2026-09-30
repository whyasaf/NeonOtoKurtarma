import { SERVICES_DATA } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Typography';
import { TextLink } from '@/components/ui/TextLink';
import { Divider } from '@/components/ui/Divider';

export function ServicesSection() {
  return (
    <Section padding="lg">
      <Container size="default">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-4 mb-10 md:mb-16">
          <Heading level="h2" className="max-w-xl text-3xl md:text-4xl">
            Hizmet Alanlarımız
          </Heading>
          <TextLink href="/hizmetler" variant="default" className="text-xs font-semibold uppercase tracking-wider">
            Tüm Hizmet Detayları &rarr;
          </TextLink>
        </div>

        {/* High-Contrast Typographic Editorial List */}
        <div className="border-t border-gray-200">
          {SERVICES_DATA.map((service) => (
            <div key={service.id}>
              <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center md:items-baseline text-center md:text-left">
                <div className="md:col-span-1 text-xs font-bold tracking-widest text-[#00BF63]">
                  {service.number}
                </div>
                <div className="md:col-span-5 text-xl md:text-3xl font-extrabold tracking-tight text-black">
                  {service.title}
                </div>
                <div className="md:col-span-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </div>
                <div className="md:col-span-2 text-center md:text-right pt-2 md:pt-0">
                  <TextLink
                    href={`/hizmetler#${service.slug}`}
                    variant="subtle"
                    className="text-xs font-semibold uppercase tracking-wider hover:text-[#00BF63] transition-colors"
                  >
                    İncele &rarr;
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
