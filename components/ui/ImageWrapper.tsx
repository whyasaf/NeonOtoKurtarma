import type { ReactNode } from 'react';

export type AspectRatio = 'landscape' | 'portrait' | 'wide' | 'square';

export interface ImageWrapperProps {
  aspectRatio?: AspectRatio;
  children: ReactNode;
  className?: string;
  caption?: string;
}

const aspectClasses: Record<AspectRatio, string> = {
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
  square: 'aspect-square',
};

export function ImageWrapper({
  aspectRatio = 'landscape',
  children,
  className = '',
  caption,
}: ImageWrapperProps) {
  return (
    <figure className={`w-full overflow-hidden bg-gray-100 ${className}`.trim()}>
      <div className={`relative w-full ${aspectClasses[aspectRatio]}`}>
        {children}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-gray-500 uppercase tracking-wider">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
