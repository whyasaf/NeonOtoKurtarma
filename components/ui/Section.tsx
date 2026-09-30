import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: SectionPadding;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const paddingClasses: Record<SectionPadding, string> = {
  none: 'py-0',
  sm: 'py-6 md:py-12',
  md: 'py-10 md:py-24',
  lg: 'py-12 md:py-32',
  xl: 'py-14 md:py-40',
  '2xl': 'py-16 md:py-48',
};

export function Section({
  padding = 'lg',
  as: Component = 'section',
  children,
  className = '',
  ...props
}: SectionProps) {
  const combinedClasses = `${paddingClasses[padding]} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
