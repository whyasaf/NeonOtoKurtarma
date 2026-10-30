import { HOME_FAQ_ITEMS } from '@/data/faq';
import { generateFaqSchema } from '@/lib/seo';
import { Container } from '@/components/ui/Container';

export function HomeFaqSection() {
  return (
    <section className="py-10 md:py-20 border-t border-[#E5E5E5]">
      <Container size="wide">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFaqSchema(HOME_FAQ_ITEMS)).replace(/</g, '\\u003c'),
          }}
        />
        <div className="space-y-5 md:space-y-8">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-3">
              SIK SORULANLAR
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black">
              Çekici çağırmadan önce bilmek isteyebileceğiniz
            </h2>
          </div>
          <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {HOME_FAQ_ITEMS.map((item) => (
              <details key={item.id} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base md:text-lg font-bold text-black [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="text-[#00BF63] text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm md:text-base text-[#555555] leading-relaxed pt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
