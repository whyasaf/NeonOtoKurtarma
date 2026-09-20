import type { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  variant?: 'default' | 'accent' | 'subtle';
  children: ReactNode;
  className?: string;
}

const variantClasses = {
  default: 'text-black hover:text-gray-600 underline underline-offset-4 decoration-1',
  accent: 'text-black hover:text-[#00BF63] transition-colors duration-150',
  subtle: 'text-gray-600 hover:text-black transition-colors duration-150',
};

export function TextLink({
  href,
  external = false,
  variant = 'default',
  children,
  className = '',
  ...props
}: TextLinkProps) {
  const combinedClasses =
    `inline-flex items-center text-sm font-medium ${variantClasses[variant]} ${className}`.trim();

  if (external || href.startsWith('tel:') || href.startsWith('https://wa.me')) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
}
