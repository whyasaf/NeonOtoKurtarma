import type { ReactNode } from 'react';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollRevealObserver } from '@/components/providers/ScrollRevealObserver';
import { PageTransition } from '@/components/providers/PageTransition';
import { CookieConsent } from '@/components/layout/CookieConsent';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = constructMetadata();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const primaryTrackingId = gaId || adsId;

  return (
    <html lang="tr" className={plusJakarta.className}>
      <head>
        <link rel="icon" href="/images/neonlogo.png?v=3" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/images/neonlogo-white.png?v=3" type="image/png" media="(prefers-color-scheme: dark)" />
        <link rel="shortcut icon" href="/images/neonlogo.png?v=3" type="image/png" media="(prefers-color-scheme: light)" />
        <link rel="shortcut icon" href="/images/neonlogo-white.png?v=3" type="image/png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/images/neonlogo.png?v=3" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/images/neonlogo-white.png?v=3" media="(prefers-color-scheme: dark)" />
        <StructuredData />
        {primaryTrackingId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${primaryTrackingId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tags-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied',
                  wait_for_update: 500
                });
                try {
                  if (localStorage.getItem('neon_cookie_consent') === 'accepted') {
                    gtag('consent', 'update', {
                      ad_storage: 'granted',
                      ad_user_data: 'granted',
                      ad_personalization: 'granted',
                      analytics_storage: 'granted'
                    });
                  }
                } catch (e) {}
                gtag('js', new Date());
                ${gaId ? `gtag('config', '${gaId}');` : ''}
                ${adsId ? `gtag('config', '${adsId}');` : ''}
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <ScrollRevealObserver />
        <Header />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
