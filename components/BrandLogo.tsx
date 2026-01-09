'use client';

import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  showIcon?: boolean;
}

export default function BrandLogo({
  variant = 'dark',
  size = 'md',
  href = '/',
  className = '',
  showIcon = true,
}: BrandLogoProps) {
  const sizeClasses = {
    sm: {
      container: 'gap-2',
      icon: 'w-7 h-7',
      text: 'text-lg',
      tagline: 'text-[8px]',
    },
    md: {
      container: 'gap-2.5',
      icon: 'w-9 h-9',
      text: 'text-xl',
      tagline: 'text-[9px]',
    },
    lg: {
      container: 'gap-3',
      icon: 'w-11 h-11',
      text: 'text-2xl',
      tagline: 'text-[10px]',
    },
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const subtleColor = variant === 'light' ? 'text-white/70' : 'text-gray-500';
  const iconBg = variant === 'light' 
    ? 'bg-white/10 border-white/20' 
    : 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-400/30';
  const iconColor = variant === 'light' ? 'text-white' : 'text-white';

  const sizes = sizeClasses[size];

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${sizes.container} hover:opacity-90 transition-all duration-300 group ${className}`}
    >
      {/* Icon - House/Building Symbol */}
      {showIcon && (
        <div className={`${sizes.icon} rounded-xl ${iconBg} border flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`w-[60%] h-[60%] ${iconColor}`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* House with key hole - real estate symbol */}
            <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" fill="currentColor" stroke="none" opacity="0.9" />
            <path d="M12 3L3 10.5V21a1 1 0 001 1h16a1 1 0 001-1V10.5L12 3z" />
            <circle cx="12" cy="14" r="2" fill={variant === 'light' ? '#10b981' : '#0d9488'} stroke="none" />
            <path d="M12 16v3" stroke={variant === 'light' ? '#10b981' : '#0d9488'} strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-black tracking-tight leading-none ${sizes.text} ${textColor}`}>
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Estate</span>
          <span className={variant === 'light' ? 'text-white' : 'text-gray-800'}>Hub</span>
        </span>
        <span className={`${sizes.tagline} font-semibold tracking-[0.2em] uppercase ${subtleColor} leading-none mt-0.5`}>
          Premium Properties
        </span>
      </div>
    </Link>
  );
}
