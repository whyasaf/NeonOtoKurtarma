import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { constructMetadata } from '@/lib/seo';
import { StructuredData } from '@/components/seo/StructuredData';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
