import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { REGIONS } from '@/data/regions';
import { constructMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = constructMetadata({
  title: 'Hizmet Bölgeleri | İstanbul Çekici & Oto Kurtarma | NEON',
  description:
    'NEON Oto Kurtarma hizmet bölgeleri: Bakırköy, Ataköy, Florya, Zeytinburnu, Bahçelievler, Fatih, Küçükçekmece ve çevresi. 7/24 oto çekici ve yol yardım.',
  path: '/hizmet-bolgeleri',
});

export default function HizmetBolgeleriPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <section className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-black leading-[1.1]">
              Hizmet{' '}
              <span className={`${playfair.className} italic font-normal tracking-normal text-[#00BF63]`}>
                bölgelerimiz.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl font-normal pt-2">
              Bakırköy merkezli olarak İstanbul Avrupa Yakası&apos;nda 7/24 oto çekici ve oto kurtarma hizmeti veriyoruz. Aşağıdaki bölgeler için ayrıntılı sayfalarımıza göz atın.
            </p>
            <TrackedPhoneLink
              location="bolgeler_hero"
              className="inline-block text-2xl font-extrabold text-black hover:text-[#00BF63] transition-colors tracking-tight"
            >
              {SITE_CONFIG.phone}
            </TrackedPhoneLink>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container size="wide">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region) => (
              <li key={region.slug}>
                <Link
                  href={`/${region.slug}`}
                  className="block h-full border border-[#E5E5E5] p-6 hover:border-black transition-colors"
                >
                  <h2 className="text-xl font-extrabold tracking-tight text-black">{region.name} çekici</h2>
                  <p className="text-sm text-[#666666] pt-2">
                    {region.areas.slice(0, 4).join(', ')}
                    {region.areas.length > 4 ? ' ve çevresi' : ''}
                  </p>
                  <span className="inline-block pt-4 text-sm font-bold text-[#00BF63]">Sayfayı aç &rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
