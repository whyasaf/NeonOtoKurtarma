export interface DividerProps {
  className?: string;
  margin?: 'sm' | 'md' | 'lg' | 'none';
}

const marginClasses = {
  none: 'my-0',
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-12',
};

export function Divider({ className = '', margin = 'md' }: DividerProps) {
  return (
    <hr
      className={`border-0 border-t border-[#E5E5E5] w-full ${marginClasses[margin]} ${className}`.trim()}
    />
  );
}
