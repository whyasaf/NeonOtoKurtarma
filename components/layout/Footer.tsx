import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/site';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { Container } from '@/components/ui/Container';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function Footer() {
  return (
    <footer className="bg-[#00BF63] text-white pt-12 md:pt-16 pb-10 border-t border-[#00a857]">
      <Container size="wide">
        {/* Main Footer Content Grid - 3 Columns Layout with Zara Mobile Centering & Prominent Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 text-center md:text-left items-center md:items-start">
          {/* Column 1: Brand Logo, Direct Phone & Social Media */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="inline-block hover:opacity-85 transition-opacity py-1"
              aria-label={SITE_CONFIG.brandName}
            >
              <Image
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.brandName}
                width={375}
                height={80}
                className="h-14 md:h-16 w-auto object-contain brightness-0 invert drop-shadow-sm mx-auto md:mx-0"
              />
            </Link>

            <div className="space-y-2">
              <p className="text-xs uppercase font-extrabold tracking-widest text-white/80">
                BİZE ULAŞIN
              </p>
              <TrackedPhoneLink
                location="footer"
                className="block text-3xl md:text-4xl font-extrabold tracking-tight text-white hover:text-black transition-colors"
              >
                {SITE_CONFIG.phone}
              </TrackedPhoneLink>
            </div>

            <div className="space-y-3 pt-1">
              <p className="text-xs uppercase font-extrabold tracking-widest text-white/80">
                BİZİ TAKİP EDİN
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                {/* TikTok Icon */}
                <a
                  href={SITE_CONFIG.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 flex items-center justify-center bg-white text-[#00BF63] rounded-full hover:bg-black hover:text-white transition-all shadow-md active:scale-95"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.12 6.2 6.34 6.34 0 1 0 11.46-3.8V9.17a8.27 8.27 0 0 0 4.77 1.52V7.24a4.84 4.84 0 0 1-1-.55z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center bg-white text-[#00BF63] rounded-full hover:bg-black hover:text-white transition-all shadow-md active:scale-95"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a
                  href={SITE_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 flex items-center justify-center bg-white text-[#00BF63] rounded-full hover:bg-black hover:text-white transition-all shadow-md active:scale-95"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: ORTA — KEŞFET */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-white">
              KEŞFET
            </h2>
            <ul className="space-y-3.5 text-base font-semibold text-white/95">
              <li>
                <Link href="/hakkimizda" className="hover:text-black transition-colors block py-0.5">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-black transition-colors block py-0.5">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-black transition-colors block py-0.5">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/musteri-yorumlari" className="hover:text-black transition-colors block py-0.5">
                  Müşteri Yorumları
                </Link>
              </li>
              <li>
                <Link href="/sosyal-medya" className="hover:text-black transition-colors block py-0.5">
                  Sosyal Medya
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-black transition-colors block py-0.5">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SAĞ — BİZİ BULUN */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-widest text-white">
              BİZİ BULUN
            </h2>
            <div className="space-y-4 text-base font-medium text-white/95">
              {/* Formatted Address */}
              <div className="leading-relaxed space-y-1 text-sm md:text-base">
                <p className="font-extrabold text-white text-base">{SITE_CONFIG.location.streetAddress}</p>
                <p>{SITE_CONFIG.location.neighborhood}, {SITE_CONFIG.location.district}</p>
                <p className="text-white/90">{SITE_CONFIG.location.city}, {SITE_CONFIG.location.country}</p>
              </div>

              {/* Action Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={SITE_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors block text-base font-bold text-white"
                >
                  Google Maps&apos;te Yol Tarifi Al &rarr;
                </a>
                <WhatsappLocationButton
                  variant="raw"
                  className="hover:text-black transition-colors block text-base font-bold text-center md:text-left text-white"
                >
                  Hızlı Konum Gönder &rarr;
                </WhatsappLocationButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-xs font-semibold text-white/90 text-center md:text-left">
          {/* Left Side */}
          <div>
            <p>
              &copy; {new Date().getFullYear()} NEON OTO KURTARMA. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-white">
              Tasarım ve geliştirme:{' '}
              <a
                href="https://whyasaf.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity text-white font-extrabold"
              >
                whyasaf | Ömer Asaf Ak
              </a>
            </p>
            <p className="text-white/90">
              MARKI LABS — Dijital Tasarım ve Geliştirme
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
