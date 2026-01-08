'use client';

import { Building2 } from 'lucide-react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'colored';
  href?: string;
  className?: string;
}

export default function BrandLogo({
  variant = 'colored',
  href = '/',
  className = '',
}: BrandLogoProps) {
  // Get text color based on variant
  const textColor = {
    light: 'text-white',
    dark: 'text-slate-900',
    colored: 'text-indigo-600',
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 hover:opacity-90 transition-opacity duration-300 ${className}`}
    >
      {/* Icon Box - Always prominent gradient */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 flex items-center justify-center shadow-lg border border-indigo-400/50">
        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
      </div>

      {/* Text - Strong weight and size */}
      <span className={`font-black tracking-tight text-lg sm:text-xl md:text-2xl ${textColor}`}>
        RealEstate
      </span>
    </Link>
  );
}
