import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollRevealObserver } from '@/components/providers/ScrollRevealObserver';
import { PageTransition } from '@/components/providers/PageTransition';
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
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <ScrollRevealObserver />
        <Header />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
