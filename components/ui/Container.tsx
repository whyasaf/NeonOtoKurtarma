import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type ContainerSize = 'narrow' | 'default' | 'wide';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  size?: ContainerSize;
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const containerClasses: Record<ContainerSize, string> = {
  narrow: 'container-narrow px-6',
  default: 'container-default px-6',
  wide: 'container-wide px-6',
};

export function Container({
  size = 'default',
  as: Component = 'div',
  children,
  className = '',
  ...props
}: ContainerProps) {
  const combinedClasses = `${containerClasses[size]} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
