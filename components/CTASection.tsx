"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AvatarStackProps {
  avatars?: Array<{
    src: string;
    alt: string;
  }>;
}

const AvatarStack = ({ avatars }: AvatarStackProps) => {
  // Default avatars if none provided
  const defaultAvatars = [
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
      alt: "User 1",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
      alt: "User 2",
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
      alt: "User 3",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
      alt: "User 4",
    },
  ];

  const usedAvatars = avatars || defaultAvatars;

  return (
    <div className="flex items-center gap-2 mb-6 sm:mb-8">
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {usedAvatars.slice(0, 4).map((avatar, index) => (
          <div
            key={index}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-2 ring-slate-900 bg-slate-800 overflow-hidden flex-shrink-0 border border-slate-700 hover:z-10 transition-all duration-300"
          >
            <img
              src={avatar.src}
              alt={avatar.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Social Proof Text */}
      <div className="flex flex-col">
        <p className="text-sm sm:text-base font-bold text-white">
          <span className="text-emerald-400">10,000+</span> Happy Customers
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          Already found their dream home
        </p>
      </div>
    </div>
  );
};

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  avatars?: Array<{
    src: string;
    alt: string;
  }>;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CTASection({
  title = "Ready to Find Your Dream Home?",
  subtitle = "Join thousands of satisfied customers who've discovered their perfect property",
  primaryButtonText = "Sign Up Now",
  primaryButtonHref = "/register",
  secondaryButtonText = "Learn How It Works",
  secondaryButtonHref = "/how-it-works",
  avatars,
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Animated Background Pattern - Waves */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />

          {/* Wave Pattern */}
          <path
            d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="rgba(16,185,129,0.05)"
          />
          <path
            d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z"
            fill="rgba(59,130,246,0.05)"
          />
        </svg>

        {/* Gradient Orbs for Depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Social Proof Avatar Stack */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <AvatarStack avatars={avatars} />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
            {title}
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* Primary Button */}
            <Link href={primaryButtonHref}>
              <button
                onClick={onPrimaryClick}
                className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-900 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-emerald-500/50 flex items-center gap-2 whitespace-nowrap"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Secondary Button */}
            <Link href={secondaryButtonHref}>
              <button
                onClick={onSecondaryClick}
                className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm flex items-center gap-2 whitespace-nowrap"
              >
                {secondaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-white/10">
            <p className="text-sm sm:text-base text-gray-400 mb-8">
              Trusted by leading real estate professionals
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {/* Trust Badge 1 */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm sm:text-base text-gray-300">
                  <span className="font-bold text-white">500+</span> Verified Agents
                </span>
              </div>
              {/* Trust Badge 2 */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm sm:text-base text-gray-300">
                  <span className="font-bold text-white">50K+</span> Active Listings
                </span>
              </div>
              {/* Trust Badge 3 */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-sm sm:text-base text-gray-300">
                  <span className="font-bold text-white">4.9★</span> Average Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
