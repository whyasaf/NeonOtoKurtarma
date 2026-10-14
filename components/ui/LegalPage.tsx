import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
  footer?: ReactNode;
}

export function LegalPage({ title, intro, updatedAt, sections, footer }: LegalPageProps) {
  return (
    <main className="bg-white text-black">
      <section className="pt-14 md:pt-24 pb-10 md:pb-14 border-b border-[#E5E5E5]">
        <Container size="narrow">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed">{intro}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#888888]">
              Son güncelleme: {updatedAt}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container size="narrow">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {index + 1}. {section.heading}
                </h2>
                <div className="space-y-3 text-base text-[#333333] leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
                  {section.body}
                </div>
              </div>
            ))}
            {footer}
          </div>
        </Container>
      </section>
    </main>
  );
}
