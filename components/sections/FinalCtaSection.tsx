import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function FinalCtaSection() {
  return (
    <Section padding="xl" className="border-t border-gray-100">
      <Container size="default">
        <div className="flex justify-center items-center">
          <Image
            src="/images/neonyol.png"
            alt="NEON Oto Kurtarma 7/24 Yol Yardım"
            width={1280}
            height={360}
            priority
            className="w-full max-w-4xl h-auto object-contain drop-shadow-sm"
          />
        </div>
      </Container>
    </Section>
  );
}
