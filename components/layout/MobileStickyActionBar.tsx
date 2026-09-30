'use client';

import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';
import { WhatsappLocationButton } from '@/components/ui/WhatsappLocationButton';

export function MobileStickyActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href={SITE_CONFIG.phoneTelLink}
          onClick={() => trackEvent('phone_click', { location: 'mobile_sticky_bar' })}
          className="flex items-center justify-center gap-2 bg-[#00BF63] hover:bg-[#00a857] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-3 rounded-[6px] transition-colors shadow-md active:scale-[0.98]"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span>HEMEN ARA</span>
        </a>

        {/* WhatsApp Location Button */}
        <WhatsappLocationButton
          variant="button"
          className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-3 rounded-[6px] transition-colors shadow-md active:scale-[0.98]"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.163 5.283-1.386c1.45.792 3.092 1.22 4.789 1.22 5.504 0 9.984-4.479 9.984-9.984 0-5.507-4.48-9.984-9.984-9.984zm.005 16.5c-1.488 0-2.946-.4-4.223-1.157l-.303-.18-3.137.823.837-3.058-.198-.315c-.832-1.325-1.272-2.863-1.272-4.437 0-4.41 3.588-7.998 7.998-7.998 4.41 0 7.998 3.588 7.998 7.998 0 4.41-3.588 7.998-7.998 7.998z" />
          </svg>
          <span>KONUM AT</span>
        </WhatsappLocationButton>
      </div>
    </div>
  );
}
