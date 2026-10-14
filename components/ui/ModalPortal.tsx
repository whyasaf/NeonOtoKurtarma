'use client';

import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
  onClose: () => void;
}

/**
 * Renders modal content directly under <body>.
 *
 * The page wrapper uses a CSS transform animation, which turns `position: fixed`
 * children into elements positioned relative to that wrapper instead of the
 * viewport. Rendering through a portal keeps overlays pinned to the screen,
 * locks background scroll and closes on Escape.
 */
export function ModalPortal({ children, onClose }: ModalPortalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(children, document.body);
}
