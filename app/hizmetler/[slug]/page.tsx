import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/site';
import { SERVICE_PAGES, getServicePage } from '@/data/service-pages';
import { REGIONS } from '@/data/regions';
import { constructMetadata, generateServicePageSchema } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return constructMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/hizmetler/${page.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const otherServices = SERVICE_PAGES.filter((p) => p.slug !== page.slug);
  const schema = generateServicePageSchema(page);
  const location = `service_${page.slug}`;

  return (
    <main className="bg-white text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      <section className="pt-10 md:pt-24 lg:pt-32 pb-10 md:pb-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <nav aria-label="Breadcrumb" className="text-xs font-semibold tracking-wider text-[#777777] uppercase">
              <Link href="/" className="hover:text-black">Ana Sayfa</Link>
              {' / '}
              <Link href="/hizmetler" className="hover:text-black">Hizmetler</Link>
            </nav>

            <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.1]">
              {page.h1}
            </h1>

            <p className="text-base md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal md:pt-2">
              {page.intro}
            </p>

            <div className="flex flex-col gap-3 pt-4 w-full sm:hidden items-center text-center">
              <WhatsappLocationButton
                variant="button"
                className="w-full min-h-[52px] px-6 text-base font-extrabold text-white bg-[#00BF63] hover:bg-[#00a857] transition-colors rounded-none flex items-center justify-center gap-2 shadow-md"
              >
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
              <TrackedPhoneLink
                location={`${location}_hero`}
                className="w-full text-center py-2 text-xl font-extrabold text-black hover:text-[#00BF63] transition-colors tracking-tight block"
              >
                {SITE_CONFIG.phone}
              </TrackedPhoneLink>
            </div>

            <div className="hidden sm:flex sm:flex-row items-center gap-6 pt-6">
              <TrackedPhoneLink location={`${location}_hero`} className="w-auto">
                <Button variant="accent" size="lg" className="min-h-[52px] bg-[#00BF63] hover:bg-[#00a857] text-white border-none">
                  {SITE_CONFIG.phone}
                </Button>
              </TrackedPhoneLink>
              <WhatsappLocationButton variant="link" className="text-sm font-semibold py-2">
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
            </div>
          </div>
        </Container>
      </section>

      {page.sections.length > 0 && (
      <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div
            className={`grid grid-cols-1 gap-10 ${
              page.sections.length === 3 ? 'lg:grid-cols-3 lg:gap-12' : 'lg:grid-cols-2 lg:gap-20'
            }`}
          >
            {page.sections.map((block) => (
              <div key={block.title} className="space-y-3">
                <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-black">{block.title}</h2>
                {block.paragraphs.map((text) => (
                  <p key={text} className="text-sm md:text-base text-[#555555] leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
      )}

      <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-6">NASIL ÇALIŞIYORUZ</p>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {page.steps.map((step, index) => (
              <li key={step.title} className="space-y-2">
                <span className="text-2xl font-extrabold text-[#00BF63]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-base md:text-lg font-bold text-black">{step.title}</h3>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="space-y-5 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
              {page.name} hakkında sık sorulanlar
            </h2>
            <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base md:text-lg font-bold text-black [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="text-[#00BF63] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-sm md:text-base text-[#555555] leading-relaxed pt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-20">
        <Container size="wide">
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-4">DİĞER HİZMETLER</p>
          <ul className="flex flex-wrap gap-2 md:gap-3 mb-10">
            {otherServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="inline-block text-xs md:text-sm font-bold border border-black px-3 md:px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-4">HİZMET BÖLGELERİ</p>
          <ul className="flex flex-wrap gap-2 md:gap-3">
            {REGIONS.slice(0, 6).map((region) => (
              <li key={region.slug}>
                <Link
                  href={`/${region.slug}`}
                  className="inline-block text-xs md:text-sm font-bold border border-[#E5E5E5] px-3 md:px-4 py-2 hover:border-black transition-colors"
                >
                  {region.name} çekici
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/hizmet-bolgeleri"
                className="inline-block text-sm font-bold text-[#00BF63] px-3 py-2 hover:text-black transition-colors"
              >
                Tüm bölgeler &rarr;
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </main>
  );
}
