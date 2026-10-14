'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/faq';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-6 md:py-8">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`answer-${item.id}`}
              className="w-full flex items-center justify-between text-left group focus:outline-none"
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight text-black group-hover:text-[#00BF63] transition-colors pr-6">
                {item.question}
              </span>
              <span className="ml-4 flex-shrink-0 text-xl font-light text-gray-500 group-hover:text-[#00BF63] transition-colors">
                {isOpen ? '—' : '+'}
              </span>
            </button>
            {isOpen && (
              <div
                id={`answer-${item.id}`}
                className="mt-4 text-base md:text-lg leading-relaxed text-[#555555] pr-8"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
