import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export const metadata = {
  title: 'Sayfa Bulunamadı | NEON Oto Kurtarma',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center py-16 md:py-24">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center space-y-6">
          <Image
            src={SITE_CONFIG.logoPath}
            alt={SITE_CONFIG.brandName}
            width={375}
            height={80}
            className="h-14 md:h-16 w-auto object-contain"
          />
          <p className="text-sm font-extrabold tracking-widest text-[#00BF63]">404</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black leading-[1.1]">
            Aradığınız sayfa bulunamadı.
          </h1>
          <p className="text-base md:text-lg text-[#555555] max-w-lg">
            Sayfa taşınmış ya da kaldırılmış olabilir. Yola ihtiyacınız varsa bize hemen ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <TrackedPhoneLink
              location="not_found"
              className="min-h-[52px] px-8 inline-flex items-center justify-center bg-[#00BF63] hover:bg-[#00a857] text-white font-bold text-lg transition-colors"
            >
              {SITE_CONFIG.phone}
            </TrackedPhoneLink>
            <Link
              href="/"
              className="min-h-[52px] px-8 inline-flex items-center justify-center border border-black text-black hover:bg-black hover:text-white font-bold text-base transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
          <WhatsappLocationButton variant="link" className="pt-2" />
        </div>
      </Container>
    </section>
  );
}
