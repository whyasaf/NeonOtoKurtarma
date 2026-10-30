import Link from 'next/link';
import { REGIONS } from '@/data/regions';
import { Container } from '@/components/ui/Container';

export function RegionsSection() {
  return (
    <section className="py-10 md:py-20 border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="max-w-xl mb-8">
          <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-3">
            HİZMET BÖLGELERİ
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
            İstanbul Avrupa Yakası&apos;nda 7/24 oto çekici ve yol yardım
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-3">
          {REGIONS.map((region) => (
            <li key={region.slug}>
              <Link
                href={`/${region.slug}`}
                className="inline-block text-xs md:text-sm font-bold border border-black px-3 md:px-4 py-2 hover:bg-black hover:text-white transition-colors"
              >
                {region.name} çekici
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
