import type { ReactNode } from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Müşteri Yorumları & Değerlendirmeler | NEON Oto Kurtarma',
  description:
    'NEON Oto Kurtarma ile ilgili gerçek müşteri deneyimleri, yorumlar ve değerlendirmeler. Bakırköy ve İstanbul genelinde 7/24 memnuniyet odaklı oto çekici.',
  path: '/musteri-yorumlari',
});

interface MusteriYorumlariLayoutProps {
  children: ReactNode;
}

export default function MusteriYorumlariLayout({
  children,
}: MusteriYorumlariLayoutProps) {
  return <>{children}</>;
}
