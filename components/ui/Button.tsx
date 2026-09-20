import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-black text-white border border-black hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black',
  secondary:
    'bg-transparent text-black border border-black hover:bg-black hover:text-white focus-visible:ring-2 focus-visible:ring-black',
  accent:
    'bg-[#00BF63] text-white border border-[#00BF63] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#00BF63]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs font-semibold uppercase tracking-wider',
  md: 'px-6 py-3 text-sm font-semibold tracking-normal',
  lg: 'px-8 py-4 text-base font-semibold tracking-normal',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const combinedClasses =
    `inline-flex items-center justify-center transition-colors duration-200 cursor-pointer rounded-none disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
