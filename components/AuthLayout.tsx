'use client';

import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&q=80)',
        }}
      />

      {/* Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 rounded-full blur-3xl -z-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-violet-500/15 rounded-full blur-3xl -z-5" />

      {/* Glass Access Card Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 sm:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-gray-200 text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Form Content */}
          {children}
        </div>

        {/* Subtle Footer Text */}
        <p className="text-center text-gray-400 text-xs mt-8 font-light tracking-wide">
          Secure • Verified • Transparent
        </p>
      </div>
    </div>
  );
}
