'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { SITE_CONFIG } from '@/data/site';
import { trackEvent } from '@/lib/tracking';

export interface TrackedPhoneLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  location?: string;
  className?: string;
}

export function TrackedPhoneLink({
  children,
  location = 'general',
  className = '',
  ...props
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={SITE_CONFIG.phoneTelLink}
      onClick={() => trackEvent('phone_click', { location })}
      className={className}
      {...props}
    >
      {children || SITE_CONFIG.phone}
    </a>
  );
}
