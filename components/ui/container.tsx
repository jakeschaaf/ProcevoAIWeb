import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

export function Container({
  children,
  size = 'lg',
  className = '',
}: ContainerProps) {
  const sizeClass = sizeMap[size];

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClass} ${className}`}>
      {children}
    </div>
  );
}
