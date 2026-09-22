'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderMobileMenuProps {
  navLinks: NavLink[];
}

export function HeaderMobileMenu({ navLinks }: HeaderMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-black border border-gray-300 rounded-none text-sm font-semibold tracking-wide uppercase"
        aria-expanded={isOpen}
        aria-label="Menüyü Aç/Kapat"
      >
        {isOpen ? 'Kapat' : 'Menü'}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 shadow-lg z-50 flex flex-col space-y-6">
          <nav aria-label="Mobil Navigasyon">
            <ul className="flex flex-col space-y-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-black hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/musteri-yorumlari"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-600 hover:text-black"
                >
                  Müşteri Yorumları
                </Link>
              </li>
            </ul>
          </nav>

          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
            <a
              href={SITE_CONFIG.phoneTelLink}
              className="block w-full text-center py-3 border border-black text-black font-semibold min-h-[48px]"
            >
              Hemen Ara: {SITE_CONFIG.phone}
            </a>
            <WhatsappLocationButton variant="button" className="w-full min-h-[48px] text-center">
              Hızlı Konum Gönder (7/24)
            </WhatsappLocationButton>
          </div>
        </div>
      )}
    </div>
  );
}
