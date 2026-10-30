import { FAQ_ITEMS } from '@/data/faq';

// Native <details> keeps every answer in the HTML (crawlable) even when closed.
export function FaqAccordion() {
  return (
    <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
      {FAQ_ITEMS.map((item) => (
        <details key={item.id} className="group py-6 md:py-8">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between text-left [&::-webkit-details-marker]:hidden">
            <span className="text-lg md:text-xl font-semibold tracking-tight text-black group-hover:text-[#00BF63] transition-colors pr-6">
              {item.question}
            </span>
            <span className="ml-4 flex-shrink-0 text-xl font-light text-gray-500 group-hover:text-[#00BF63] transition-colors">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">—</span>
            </span>
          </summary>
          <div className="mt-4 text-base md:text-lg leading-relaxed text-[#555555] pr-8">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
