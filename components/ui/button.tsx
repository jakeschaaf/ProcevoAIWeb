'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const variantStyles = {
  primary:
    'bg-accent-500 hover:bg-accent-400 text-slate-950 shadow-lg shadow-accent-500/20 hover:shadow-accent-400/30',
  secondary:
    'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600',
  ghost:
    'bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-slate-100',
};

const sizeStyles = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2.5 px-6 text-sm',
  lg: 'py-3.5 px-8 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center text-center tracking-wide disabled:opacity-50 disabled:cursor-not-allowed';
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
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
