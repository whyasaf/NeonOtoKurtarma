'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Çekici çağırmak için ne yapmam gerekiyor?',
    answer:
      'Telefonla bize ulaşabilir veya WhatsApp üzerinden konumunuzu paylaşabilirsiniz. Aracınızın bulunduğu konumu ve ihtiyacınızı belirtmeniz yeterlidir.',
  },
  {
    id: 'faq-2',
    question: 'Çekici bulunduğum konuma ne kadar sürede gelir?',
    answer:
      'Bakırköy ve çevre ilçelerde ortalama ulaşım süremiz yaklaşık 20 dakikadır. Ancak trafik, konum ve yoğunluk gibi koşullara göre süre değişebilir.',
  },
  {
    id: 'faq-3',
    question: 'Gece veya hafta sonu çekici hizmeti alabilir miyim?',
    answer: 'Evet. 7/24 oto kurtarma ve yol yardım hizmeti sunuyoruz.',
  },
  {
    id: 'faq-4',
    question: 'Otoyolda veya yol kenarında kalan aracımı alabilir misiniz?',
    answer:
      'Evet. Aracınızın bulunduğu konuma gelerek uygun çekici ekipmanıyla taşıma hizmeti sağlıyoruz.',
  },
  {
    id: 'faq-5',
    question:
      'Aracım çalışmıyor, servise veya istediğim başka bir adrese götürebilir misiniz?',
    answer:
      'Evet. Aracınızı bulunduğu noktadan alarak servis, otopark veya belirttiğiniz uygun bir adrese taşıyabiliriz.',
  },
  {
    id: 'faq-6',
    question: 'Çekici ücreti ne kadar?',
    answer:
      'Ücret; konum, mesafe, aracın durumu ve ihtiyaç duyulan hizmete göre değişebilir. Güncel fiyat bilgisi için bizi arayabilirsiniz.',
  },
  {
    id: 'faq-7',
    question: "WhatsApp'tan konum göndererek çekici çağırabilir miyim?",
    answer:
      'Evet. WhatsApp üzerinden konumunuzu göndererek bulunduğunuz yeri kolayca paylaşabilirsiniz.',
  },
  {
    id: 'faq-8',
    question: 'Hangi araçları taşıyabiliyorsunuz?',
    answer:
      'Taşınacak aracın türüne ve durumuna göre uygun ekipman belirlenir. Aracınızın modelini ve bulunduğu konumu bize ileterek bilgi alabilirsiniz.',
  },
  {
    id: 'faq-9',
    question: 'Çekici hizmeti dışında yol yardım hizmeti de veriyor musunuz?',
    answer:
      'Evet. Akü takviyesi, lastik değişimi ve yakıt desteği gibi yol yardım hizmetleri de sunuyoruz.',
  },
  {
    id: 'faq-10',
    question: 'Şehirler arası araç taşıma yapıyor musunuz?',
    answer:
      'Evet. Özellikle VIP transfer kapsamında araçların şehirler arası taşınması için hizmet sunuyoruz.',
  },
];

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
