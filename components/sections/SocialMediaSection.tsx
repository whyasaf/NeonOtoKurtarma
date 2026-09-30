import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { SITE_CONFIG } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

const SOCIAL_CHANNELS = [
  {
    name: 'INSTAGRAM',
    count: '15.000+ TAKİPÇİ',
    url: SITE_CONFIG.socialLinks.instagram,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'TIKTOK',
    count: '8.000+ TAKİPÇİ',
    url: SITE_CONFIG.socialLinks.tiktok,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.22V8.2a6.34 6.34 0 0 0-5.12 6.2 6.34 6.34 0 1 0 11.46-3.8V9.17a8.27 8.27 0 0 0 4.77 1.52V7.24a4.84 4.84 0 0 1-1-.55z" />
      </svg>
    ),
  },
  {
    name: 'YOUTUBE',
    count: '15.000+ ABONE',
    url: SITE_CONFIG.socialLinks.youtube,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function SocialMediaSection() {
  return (
    <Section id="sosyal-medya" padding="lg" className="border-t border-[#E5E5E5] bg-[#FAFAFA] scroll-mt-24">
      <Container size="wide">
        <div className="bg-white border border-black/20 rounded-[10px] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          {/* Left Title */}
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold text-black tracking-tight">
              Sahada ve dijitalde{' '}
              <span className={`${playfair.className} italic font-normal text-[#00BF63]`}>
                38.000+ takipçi.
              </span>
            </h3>
            <p className="text-xs md:text-sm text-[#666666]">
              Canlı çekici operasyonlarımızı ve saha videolarımızı sosyal medyada paylaşıyoruz.
            </p>
          </div>

          {/* Right 3 Minimal Inline Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            {SOCIAL_CHANNELS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-black/20 hover:border-black rounded-[8px] px-4 py-3 text-xs font-bold text-black transition-all hover:shadow-md group"
              >
                <div className="text-black group-hover:text-[#00BF63] transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="uppercase tracking-widest text-[11px]">{item.name}</span>
                  <span className="text-[10px] text-[#888888] font-semibold">{item.count}</span>
                </div>
                <span className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all ml-1">
                  &rarr;
                </span>
              </a>
            ))}

            <Link
              href="/sosyal-medya"
              className="flex items-center gap-1.5 bg-black hover:bg-[#00BF63] text-white rounded-[8px] px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>TÜMÜ &rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
