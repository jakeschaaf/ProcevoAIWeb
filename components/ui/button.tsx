'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  primary: 'bg-brand-500 hover:bg-brand-600 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
};

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6',
  lg: 'py-4 px-8 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition-colors inline-block text-center';
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const classes = `${baseStyles} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
