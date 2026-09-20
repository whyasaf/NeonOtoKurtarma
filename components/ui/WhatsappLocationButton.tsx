'use client';

import { useState, type ReactNode } from 'react';
import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';

export interface WhatsappLocationButtonProps {
  children?: ReactNode;
  label?: string;
  className?: string;
  variant?: 'link' | 'button' | 'raw';
  showSubtext?: boolean;
}

export function WhatsappLocationButton({
  children,
  label,
  className = '',
  variant = 'link',
  showSubtext = false,
}: WhatsappLocationButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleShareLocation = () => {
    trackEvent('whatsapp_click', { action: 'gps_location_request' });

    const openDirectWhatsapp = () => {
      window.open(SITE_CONFIG.whatsappLink, '_blank', 'noopener,noreferrer');
    };

    // Check if Geolocation API is supported
    if (typeof window === 'undefined' || !('geolocation' in navigator)) {
      openDirectWhatsapp();
      return;
    }

    setLoading(true);

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = `Merhaba, oto kurtarma/yol yardım desteğine ihtiyacım var. Konumum: ${googleMapsUrl}`;
        const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
          message
        )}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      },
      () => {
        setLoading(false);
        // On any GPS error/denial/timeout, open direct WhatsApp so user is never blocked
        openDirectWhatsapp();
      },
      options
    );
  };

  const buttonClasses =
    variant === 'button'
      ? 'bg-[#00BF63] hover:bg-[#00a857] text-white font-bold px-7 py-3.5 text-base tracking-wide transition-colors inline-block text-center rounded-sm cursor-pointer'
      : variant === 'raw'
      ? 'cursor-pointer'
      : 'text-sm md:text-base font-semibold text-black hover:text-[#00BF63] underline underline-offset-8 transition-colors cursor-pointer';

  const defaultContent = label || (loading ? 'Konum Alınıyor...' : 'Konumumu WhatsApp\'tan Gönder \u2192');

  return (
    <div className={variant === 'raw' ? 'inline-block' : 'space-y-1.5 inline-block'}>
      <button
        type="button"
        onClick={handleShareLocation}
        disabled={loading}
        className={`${buttonClasses} ${loading ? 'opacity-70 cursor-wait' : ''} ${className}`.trim()}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Konum Alınıyor...
          </span>
        ) : (
          children || defaultContent
        )}
      </button>

      {showSubtext && (
        <p className="text-[11px] text-[#777777] font-normal">
          Konumunuz yalnızca WhatsApp mesajını hazırlamak için kullanılır.
        </p>
      )}
    </div>
  );
}
