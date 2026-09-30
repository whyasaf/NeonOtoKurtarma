import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { HeaderMobileMenu } from '@/components/layout/HeaderMobileMenu';

export function Header() {
  const leftLinks = [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Hizmetler', href: '/hizmetler' },
  ];

  const rightLinks = [
    { label: 'Sosyal Medya', href: '/sosyal-medya' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <Container size="wide" className="py-4">
        {/* Desktop Centered Grid Navbar */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left Navigation Group */}
          <nav aria-label="Sol Navigasyon" className="flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-gray-800">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Centered Logo Image */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center hover:opacity-85 transition-opacity cursor-pointer"
              aria-label={SITE_CONFIG.brandName}
            >
              <Image
                src={SITE_CONFIG.logoPath}
                alt={SITE_CONFIG.brandName}
                width={375}
                height={95}
                priority
                className="h-11 md:h-14 w-auto max-w-[220px] md:max-w-[280px] object-contain py-0.5"
              />
            </Link>
          </div>

          {/* Right Navigation & Action Group */}
          <div className="flex items-center justify-end space-x-8">
            <nav aria-label="Sağ Navigasyon">
              <ul className="flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-gray-800">
                {rightLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <TrackedPhoneLink
              location="header"
              className="text-xs font-bold text-black hover:text-[#00BF63] transition-colors border-l border-gray-200 pl-6"
            >
              {SITE_CONFIG.phone}
            </TrackedPhoneLink>
          </div>
        </div>

        {/* Mobile Navbar View */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            href="/"
            className="flex items-center hover:opacity-85 transition-opacity cursor-pointer"
            aria-label={SITE_CONFIG.brandName}
          >
            <Image
              src={SITE_CONFIG.logoPath}
              alt={SITE_CONFIG.brandName}
              width={280}
              height={70}
              priority
              className="h-11 md:h-14 w-auto max-w-[220px] md:max-w-[280px] object-contain py-0.5"
            />
          </Link>

          <HeaderMobileMenu
            navLinks={[
              { label: 'Ana Sayfa', href: '/' },
              ...leftLinks,
              ...rightLinks.map((l) => ({ label: l.label, href: l.href })),
            ]}
          />
        </div>
      </Container>
    </header>
  );
}
