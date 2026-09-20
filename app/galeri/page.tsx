import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Galeri | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma araç filosu ve operasyonlarımızdan kareler.',
  path: '/galeri',
});

export default function GaleriPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Galeri</h1>
      <p className="text-gray-700">
        Araç çekici ve kurtarma operasyonlarımızdan görüntüler.
      </p>
    </section>
  );
}
