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
  primary:
    'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md',
  secondary:
    'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400',
};

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2.5 px-5 text-sm',
  lg: 'py-3.5 px-7 text-base',
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
    'font-medium rounded-full transition-all duration-200 inline-flex items-center justify-center text-center tracking-wide';
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
