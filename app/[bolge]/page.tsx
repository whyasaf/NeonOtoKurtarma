import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { SERVICE_PAGES } from '@/data/service-pages';
import { REGIONS, getRegion, locative } from '@/data/regions';
import { constructMetadata, generateRegionSchema } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const dynamicParams = false;

export function generateStaticParams() {
  return REGIONS.map((region) => ({ bolge: region.slug }));
}

interface RegionPageProps {
  params: Promise<{ bolge: string }>;
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { bolge } = await params;
  const region = getRegion(bolge);
  if (!region) return {};

  return constructMetadata({
    title: region.metaTitle ?? `${region.name} Çekici & Oto Kurtarma 7/24 | NEON`,
    description: `${region.name} nöbetçi çekici ve oto kurtarma 7/24: arıza, kaza, akü takviye, lastik değişimi. Çekici numarası: ${SITE_CONFIG.phone}.`,
    path: `/${region.slug}`,
  });
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { bolge } = await params;
  const region = getRegion(bolge);
  if (!region) notFound();

  const baseLine = region.isHome
    ? `Merkezimiz ${region.district}'de olduğu için bu bölgeye doğrudan ekip yönlendiriyoruz.`
    : `Bakırköy merkezimizden ${region.name} bölgesine ekip yönlendiriyoruz.`;

  const faqs = [
    {
      question: `${region.name} çekici numarası nedir?`,
      answer: `${region.name} için çekici numarası ${SITE_CONFIG.phone}. 7/24 nöbetçi hat olarak gece ve hafta sonu da açık; WhatsApp'tan konum da gönderebilirsiniz.`,
    },
    {
      question: `${locative(region.name)} çekiciyi nasıl çağırabilirim?`,
      answer: `${SITE_CONFIG.phone} numarasını arayabilir ya da WhatsApp'tan konumunuzu paylaşabilirsiniz. Aracınızın nerede olduğunu ve yaşadığınız sorunu belirtmeniz yeterlidir.`,
    },
    {
      question: `${region.name} için 7/24 hizmet var mı?`,
      answer: `Evet. ${region.name} dahil İstanbul genelinde gece ve hafta sonu dahil 7/24 oto kurtarma ve yol yardım hizmeti veriyoruz. ${baseLine}`,
    },
    {
      question: `${locative(region.name)} hangi hizmetleri alabilirim?`,
      answer: `Arıza ve kaza çekici hizmeti, akü takviyesi, lastik değişimi ve VIP araç transferi hizmetlerini ${region.name} bölgesinde sağlıyoruz. Süre trafik ve konuma göre değişir.`,
    },
  ];

  faqs.push(...(region.extraFaqs ?? []));

  const neighbors = region.neighbors
    .map((slug) => getRegion(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const schema = generateRegionSchema(region, faqs);

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
              <Link href="/hizmet-bolgeleri" className="hover:text-black">Hizmet Bölgeleri</Link>
            </nav>

            <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              {region.name} çekici ve{' '}
              <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>
                oto kurtarma.
              </span>
            </h1>

            <p className="text-base md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal md:pt-2">
              {region.intro}
            </p>

            <div className="flex flex-col gap-3 pt-4 w-full sm:hidden items-center text-center">
              <WhatsappLocationButton
                variant="button"
                className="w-full min-h-[52px] px-6 text-base font-extrabold text-white bg-[#00BF63] hover:bg-[#00a857] transition-colors rounded-none flex items-center justify-center gap-2 shadow-md"
              >
                Hızlı Konum Gönder (7/24) &rarr;
              </WhatsappLocationButton>
              <TrackedPhoneLink
                location={`bolge_${region.slug}_hero`}
                className="w-full text-center py-2 text-xl font-extrabold text-black hover:text-[#00BF63] transition-colors tracking-tight block"
              >
                {SITE_CONFIG.phone}
              </TrackedPhoneLink>
            </div>

            <div className="hidden sm:flex sm:flex-row items-center gap-6 pt-6">
              <TrackedPhoneLink location={`bolge_${region.slug}_hero`} className="w-auto">
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

      {region.extraSections && (
        <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {region.extraSections.map((block) => (
                <div key={block.title} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-black">
                    {block.title}
                  </h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase">BÖLGE</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
                {region.name} ve çevresinde hizmet verdiğimiz yerler
              </h2>
              <p className="text-base text-[#555555] leading-relaxed">{baseLine}</p>
              <ul className="flex flex-wrap gap-2 pt-2">
                {region.areas.map((area) => (
                  <li
                    key={area}
                    className="text-xs font-semibold tracking-wider text-[#444444] uppercase border border-[#E5E5E5] px-3 py-1.5"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#666666] pt-2">
                <span className="font-bold text-black">Sık çalıştığımız hatlar: </span>
                {region.roads.join(', ')}.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase">SAHA</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
                {locative(region.name)} sık yardım ettiğimiz durumlar
              </h2>
              <ul className="space-y-2 md:space-y-3">
                {region.situations.map((situation) => (
                  <li key={situation} className="flex gap-3 text-sm md:text-base text-[#444444] leading-relaxed">
                    <span className="text-[#00BF63] font-extrabold">&bull;</span>
                    <span>{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-xl mb-6 md:mb-10">
            <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-3">HİZMETLER</p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
              {locative(region.name)} sunduğumuz hizmetler
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {SERVICE_PAGES.map((service, index) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className={`block border border-[#E5E5E5] p-4 md:p-6 hover:border-black transition-colors ${
                  SERVICE_PAGES.length % 2 === 1 && index === SERVICE_PAGES.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <h3 className="text-base md:text-lg font-extrabold tracking-tight text-black flex items-center justify-between">
                  {service.name}
                  <span className="sm:hidden text-[#00BF63]">&rarr;</span>
                </h3>
                <p className="hidden sm:block text-sm text-[#555555] leading-relaxed pt-2">{service.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-20 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="space-y-5 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
              {region.name} çekici hakkında sık sorulanlar
            </h2>
            <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
              {faqs.map((faq) => (
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
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-4">YAKIN BÖLGELER</p>
          <ul className="flex flex-wrap gap-3">
            {neighbors.map((neighbor) => (
              <li key={neighbor.slug}>
                <Link
                  href={`/${neighbor.slug}`}
                  className="inline-block text-sm font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                  {neighbor.name} çekici
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/hizmet-bolgeleri"
                className="inline-block text-sm font-bold text-[#00BF63] px-4 py-2 hover:text-black transition-colors"
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
