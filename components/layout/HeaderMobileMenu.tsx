'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';
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

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 min-h-[48px] min-w-[48px] flex items-center justify-center text-black focus:outline-none z-[60] relative"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
      >
        {isOpen ? (
          /* Fine Line Larger SVG Cross (Çarpı) Icon when open */
          <svg className="w-7 h-7 fill-none stroke-current stroke-[1.25]" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Fine Line Larger SVG Hamburger Icon when closed */
          <svg className="w-7 h-7 fill-none stroke-current stroke-[1.25]" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Modern Right-Side 75% Slide-Over Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[75vw] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between p-6 pt-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Clean Structured Page Navigation Links (Normal Weight, Zara Style) */}
        <nav aria-label="Mobil Navigasyon" className="py-4 flex-1 overflow-y-auto">
          <ul className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-normal text-black uppercase tracking-wider hover:text-[#00BF63] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA Area: Green Location Button Large + Phone Number Below */}
        <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
          {/* Large Green WhatsApp Location Button */}
          <WhatsappLocationButton
            variant="button"
            className="w-full py-3.5 px-4 bg-[#00BF63] hover:bg-[#00a857] text-white font-extrabold text-xs uppercase tracking-wider text-center rounded-none shadow-md transition-colors flex items-center justify-center gap-2"
          >
            Hızlı Konum Gönder (7/24) &rarr;
          </WhatsappLocationButton>

          {/* Large Prominent Direct Phone Button */}
          <a
            href={SITE_CONFIG.phoneTelLink}
            onClick={() => trackEvent('phone_click', { location: 'mobile_drawer' })}
            className="block text-center py-3.5 px-4 text-sm font-extrabold text-white bg-[#00BF63] hover:bg-[#00a857] uppercase tracking-wider transition-colors"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
