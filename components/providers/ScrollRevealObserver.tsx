'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    let observer: IntersectionObserver | null = null;

    const setupReveal = () => {
      const selectors = [
        'section',
        'article',
        '.grid > *',
        '[class*="grid"] > *',
        '.space-y-16 > *',
        '.space-y-12 > *',
        '.space-y-8 > *',
        '.divide-y > *',
        'main iframe',
        '.reveal-item',
      ];

      const targets = document.querySelectorAll(selectors.join(', '));
      const windowHeight = window.innerHeight;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      targets.forEach((el) => {
        if (el.closest('header') || el.closest('footer')) return;

        // Reset previous reveal state for clean route animation
        el.classList.remove('is-revealed');

        if (!el.classList.contains('reveal-item')) {
          el.classList.add('reveal-item');
        }

        const rect = el.getBoundingClientRect();
        // If in initial upper viewport, reveal smoothly
        if (rect.top < windowHeight * 0.7) {
          requestAnimationFrame(() => {
            el.classList.add('is-revealed');
          });
        } else {
          observer?.observe(el);
        }
      });
    };

    const timer = setTimeout(setupReveal, 50);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
