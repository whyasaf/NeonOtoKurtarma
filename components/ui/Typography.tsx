import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const headingStyleClasses: Record<HeadingLevel, string> = {
  display: 'text-[length:var(--font-display)] font-bold tracking-tight leading-[1.05]',
  h1: 'text-[length:var(--font-h1)] font-bold tracking-tight leading-[1.12]',
  h2: 'text-[length:var(--font-h2)] font-semibold tracking-tight leading-[1.18]',
  h3: 'text-[length:var(--font-h3)] font-semibold tracking-normal leading-[1.22]',
  h4: 'text-[length:var(--font-h4)] font-medium tracking-normal leading-[1.3]',
};

const headingDefaultTag: Record<HeadingLevel, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export function Heading({
  level = 'h2',
  as,
  children,
  className = '',
  ...props
}: HeadingProps) {
  const Component = as || headingDefaultTag[level];
  const combinedClasses = `${headingStyleClasses[level]} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}

export type TextVariant = 'body' | 'lead' | 'small' | 'caption';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const textStyleClasses: Record<TextVariant, string> = {
  lead: 'text-[length:var(--font-lead)] text-gray-800 leading-relaxed font-normal',
  body: 'text-[length:var(--font-body)] text-gray-700 leading-relaxed',
  small: 'text-[length:var(--font-small)] text-gray-600 leading-normal',
  caption: 'text-[length:var(--font-caption)] text-gray-500 tracking-widest uppercase font-semibold',
};

export function Text({
  variant = 'body',
  as: Component = 'p',
  children,
  className = '',
  ...props
}: TextProps) {
  const combinedClasses = `${textStyleClasses[variant]} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
