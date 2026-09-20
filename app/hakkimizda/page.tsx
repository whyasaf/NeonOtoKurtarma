import { constructMetadata } from '@/lib/seo';
import { SITE_CONFIG } from '@/data/site';

export const metadata = constructMetadata({
  title: 'Hakkımızda | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma hakkında kurumsal bilgiler, misyonumuz ve vizyonumuz.',
  path: '/hakkimizda',
});

export default function HakkimizdaPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Hakkımızda</h1>
      <p className="text-gray-700 leading-relaxed max-w-2xl">
        {SITE_CONFIG.brandName}, İstanbul genelinde 7/24 profesyonel yol yardım ve oto kurtarma hizmetleri sunmak üzere kurulmuştur. Güvenilir kadromuz ve donanımlı araç filomuzla sürücülerin her an yanındayız.
      </p>
    </section>
  );
}
