'use client';

import { COOKIE_CONSENT_KEY } from '@/components/layout/CookieConsent';

export function ResetCookieConsentButton() {
  const handleReset = () => {
    try {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
    } catch {
      // Ignore: nothing stored.
    }
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={handleReset}
      className="min-h-[48px] px-6 bg-black hover:bg-[#00BF63] text-white text-sm font-bold transition-colors cursor-pointer"
    >
      Çerez tercihimi değiştir
    </button>
  );
}
