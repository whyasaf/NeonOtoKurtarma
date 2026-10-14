'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const COOKIE_CONSENT_KEY = 'neon_cookie_consent';

type ConsentChoice = 'accepted' | 'rejected';

function readChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Defer to the next frame so the banner never blocks first paint.
    const frame = window.requestAnimationFrame(() => {
      setVisible(readChoice() === null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const choose = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch {
      // Storage unavailable: the choice only lasts for this page view.
    }

    if (typeof window.gtag === 'function') {
      const state = choice === 'accepted' ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed z-[90] bottom-3 left-3 right-3 md:right-auto md:bottom-5 md:left-5 md:max-w-sm bg-white border border-black/15 shadow-2xl p-4 md:p-5 space-y-3"
    >
      <p className="text-sm text-[#333333] leading-relaxed">
        Siteyi geliştirmek ve reklam performansını ölçmek için çerezler kullanıyoruz. Tercihiniz
        sizde.{' '}
        <Link
          href="/cerez-politikasi"
          className="font-semibold text-black hover:text-[#00BF63] transition-colors !underline underline-offset-2"
        >
          Çerez Politikası
        </Link>
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose('rejected')}
          className="min-h-[44px] px-3 border border-black text-black text-xs font-extrabold uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          Reddet
        </button>
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="min-h-[44px] px-3 bg-[#00BF63] hover:bg-[#00a857] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
