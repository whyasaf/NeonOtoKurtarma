import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Müşteri Yorumları | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma 7/24 yol yardım ve oto çekici hizmetini deneyimleyen müşterilerimizin görüşleri.',
  path: '/musteri-yorumlari',
});

export default function MusteriYorumlariPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Müşteri Yorumları</h1>
      <p className="text-gray-700">
        Müşterilerimizin sunduğumuz hızlı ve güvenilir oto kurtarma hizmetleri hakkındaki değerlendirmeleri.
      </p>
    </section>
  );
}
