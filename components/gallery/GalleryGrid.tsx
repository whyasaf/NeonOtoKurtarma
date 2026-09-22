'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
    }
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Group images into chunks of 10 for the exact structured catalog pattern:
  // 1. 3 items side-by-side
  // 2. 1 wide horizontal full banner
  // 3. 4 items side-by-side
  // 4. 2 square/medium items side-by-side
  const groups: { items: string[]; startIndex: number }[] = [];
  for (let i = 0; i < images.length; i += 10) {
    groups.push({
      items: images.slice(i, i + 10),
      startIndex: i,
    });
  }

  const renderCard = (src: string, globalIndex: number, aspectClass: string) => (
    <div
      key={src}
      onClick={() => setSelectedIndex(globalIndex)}
      className={`group relative overflow-hidden bg-[#00BF63] p-[2px] cursor-pointer border border-[#00BF63] hover:shadow-[0_0_25px_rgba(0,191,99,0.4)] transition-all duration-300 ${aspectClass}`}
    >
      {/* Rotating Neon Green Light Beam on Hover */}
      <div className="neon-border-spinner" />

      {/* Inner Image Frame */}
      <div className="relative w-full h-full overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={`NEON Oto Kurtarma Operasyon Görseli ${globalIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Luxury Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-widest font-semibold bg-black/75 px-4 py-2 backdrop-blur-sm border border-white/20 shadow-md">
            Büyüt &rarr;
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Cadenced Magazine / Catalog Layout */}
      <div className="space-y-8 md:space-y-12">
        {groups.map((group, groupIdx) => {
          const row1 = group.items.slice(0, 3);
          const row2 = group.items.slice(3, 4);
          const row3 = group.items.slice(4, 8);
          const row4 = group.items.slice(8, 10);
          const baseIdx = group.startIndex;

          return (
            <div key={groupIdx} className="space-y-6 md:space-y-8">
              {/* Row 1: 3 Items Side-by-Side */}
              {row1.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {row1.map((src, i) => renderCard(src, baseIdx + i, 'aspect-[4/3] sm:aspect-[4/3]'))}
                </div>
              )}

              {/* Row 2: 1 Wide Horizontal Banner */}
              {row2.length > 0 && (
                <div className="w-full">
                  {renderCard(row2[0], baseIdx + 3, 'aspect-[16/9] md:aspect-[21/9]')}
                </div>
              )}

              {/* Row 3: 4 Items Side-by-Side */}
              {row3.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                  {row3.map((src, i) => renderCard(src, baseIdx + 4 + i, 'aspect-square'))}
                </div>
              )}

              {/* Row 4: 2 Medium/Square Items Side-by-Side */}
              {row4.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {row4.map((src, i) => renderCard(src, baseIdx + 8 + i, 'aspect-[16/10]'))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* High-Fashion Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light z-50 p-2 cursor-pointer transition-colors"
            aria-label="Kapat"
          >
            &#x2715;
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white text-4xl p-3 z-50 cursor-pointer transition-colors"
            aria-label="Önceki Görsel"
          >
            &#8249;
          </button>

          {/* Current Image Container */}
          <div
            className="relative w-full max-w-5xl h-[75vh] md:h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt={`NEON Oto Kurtarma Operasyon Görseli ${selectedIndex + 1}`}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white text-4xl p-3 z-50 cursor-pointer transition-colors"
            aria-label="Sonraki Görsel"
          >
            &#8250;
          </button>

          {/* Image Counter Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-semibold tracking-widest uppercase">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
