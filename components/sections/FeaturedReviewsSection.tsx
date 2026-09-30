'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '600'],
  display: 'swap',
});

interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  comment: string;
  fullComment: string;
}

const FEATURED_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Elanur A***',
    location: 'Bakırköy, İstanbul',
    service: 'Hızlı Çekici Kurtarma',
    comment: 'Hızlıydı. Yaklaşık 10 dakika gibi bir sürede yanıma ulaşıp hemen aracımı kurtardılar...',
    fullComment: 'Hızlıydı. Yaklaşık 10 dakika gibi bir sürede yanıma ulaşıp hemen aracımı kurtardılar. Memnun kaldım teşekkürler.',
  },
  {
    id: 2,
    name: 'Uğur B***',
    location: 'Ataköy, Bakırköy',
    service: 'Akü Takviye Hizmeti',
    comment: 'Akü takviyesi için teşekkürler. Aracımın dörtlülerini açık unuttuğum için aküm bitmiş...',
    fullComment: 'Akü takviyesi için teşekkürler. Aracımın dörtlülerini açık unuttuğum için aküm bitmiş. Kısa bir süre içinde gelip Powerbank tarzı bir ekipmanla aracımı çalıştırdılar. Fiyat gayet makuldü.',
  },
  {
    id: 3,
    name: 'Ömer Asaf A***',
    location: 'Florya, İstanbul',
    service: 'Özel Çekici Kurtarma',
    comment: 'Park halinde arızalanan aracım. Aracım çalışmadı, bir kaç tane çekici geldi fakat...',
    fullComment: 'Park halinde arızalanan aracım. Aracım çalışmadı, bir kaç tane çekici geldi fakat park yerinden çıkaramadıkları için geri gittiler. Neon oto kurtarma gayet pratik şekilde aracı yükledi. Çok teşekkürler.',
  },
  {
    id: 4,
    name: 'Furkan Z***',
    location: 'Yeşilköy, Bakırköy',
    service: 'Basık Araç Çekici',
    comment: 'Basık araba sorunu. Aracım yere yakın olduğu için aradığım çoğu çekici alamayacağını söyledi...',
    fullComment: 'Basık araba sorunu. Aracım yere yakın olduğu için aradığım çoğu çekici alamayacağını söyledi. Neon oto kurtarma aracıma zarar vermeden sorunsuz şekilde aldı. Emeğiniz için teşekkürler.',
  },
];

export function FeaturedReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E5E5E5]">
      <div className="container-wide px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-black text-3xl md:text-5xl font-extrabold tracking-tight">
              Müşterilerimiz ne{' '}
              <span className={`${playfair.className} italic font-normal text-[#00BF63]`}>
                diyor?
              </span>
            </h2>
            <p className="text-[#666666] max-w-xl mx-auto text-base md:text-lg">
              Bakırköy ve İstanbul genelindeki 7/24 oto kurtarma müdahalelerimiz hakkında yapılan gerçek sürücü değerlendirmeleri.
            </p>
          </div>

          {/* 4 Featured Prominent Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_REVIEWS.map((review) => (
              <div
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="bg-white border border-black/20 hover:border-black rounded-[10px] p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="border-b border-gray-100 pb-3 space-y-1.5">
                    <div className="flex text-[#00BF63] text-sm">★ ★ ★ ★ ★</div>
                    <div className="text-[11px] font-semibold text-[#00BF63] uppercase tracking-wider block">
                      {review.service}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#333333] leading-relaxed font-normal italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-black group-hover:text-[#00BF63] transition-colors">
                      {review.name}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-medium">{review.location}</span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#00BF63] group-hover:translate-x-1 transition-all flex items-center gap-1">
                    Oku &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/musteri-yorumlari"
              className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-black hover:text-[#00BF63] transition-colors gap-2 border-b-2 border-black pb-1 hover:border-[#00BF63]"
            >
              <span>TÜM MÜŞTERİ YORUMLARINI İNCELE</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Modal Popup for Detailed Review Reading */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-[12px] border border-black/30 p-6 md:p-8 max-w-lg w-full shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold p-2"
              aria-label="Kapat"
            >
              &times;
            </button>

            {/* Header Info */}
            <div className="space-y-2 border-b border-gray-100 pb-4 pr-8">
              <div className="flex text-[#00BF63] text-lg font-bold">★ ★ ★ ★ ★</div>
              <h3 className="text-xl font-extrabold text-black tracking-tight">
                {selectedReview.name}
              </h3>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
                <span>{selectedReview.location}</span>
                <span>&bull;</span>
                <span className="text-[#00BF63]">{selectedReview.service}</span>
              </div>
            </div>

            {/* Full Comment */}
            <div className="py-2">
              <p className="text-base text-[#222222] leading-relaxed font-normal italic">
                &ldquo;{selectedReview.fullComment}&rdquo;
              </p>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                NEON OTO KURTARMA &bull; DEĞERLENDİRME
              </span>
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="bg-black hover:bg-[#00BF63] text-white font-bold text-xs uppercase px-5 py-2.5 transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
