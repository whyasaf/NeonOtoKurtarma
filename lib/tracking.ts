export type TrackingEventName =
  | 'phone_click'
  | 'whatsapp_click'
  | 'contact_form_submit';

export interface TrackingEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Tracks a custom analytics / Google Ads conversion event safely.
 * Only triggers if gtag is configured via environment variables in the browser.
 */
export function trackEvent(
  eventName: TrackingEventName,
  params?: TrackingEventParams
): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    // Development console log for verification without fake tracking scripts
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Tracking Event Abstracted]: ${eventName}`, params);
    }
  }
}
