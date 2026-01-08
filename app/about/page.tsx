'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Zap, Users, ArrowRight } from 'lucide-react';

const StatCounter = ({ end, duration = 2, showPlus = true }: { end: number; duration?: number; showPlus?: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const animateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(end * progress));

      if (progress < 1) {
        setTimeout(animateCount, 50);
      } else {
        setCount(end);
      }
    };

    setTimeout(animateCount, 100);
  }, [end, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  return <span>{formatNumber(count)}{showPlus ? '+' : ''}</span>;
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Premium Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45201003acee?w=1400&h=900&fit=crop&q=80')`,
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-block mb-1 sm:mb-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 uppercase">
                ✨ About RealEstate
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              We Simplify{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Real Estate
              </span>
              <br />
              For Everyone
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Making property discovery transparent, fair, and accessible to every person in India. We're revolutionizing how people buy, sell, and rent properties.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
              <Link href="/buy">
                <button className="group px-6 sm:px-10 py-3 sm:py-5 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-violet-500/50 flex items-center gap-2 whitespace-nowrap">
                  Explore Properties
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="group px-6 sm:px-10 py-3 sm:py-5 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-bold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm flex items-center gap-2 whitespace-nowrap">
                Learn More
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>


      </section>

      {/* Section 2: Brand Story - Asymmetrical Split */}
      <section className="bg-white py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We believe everyone deserves access to quality real estate information and transparent transactions. What started as a simple idea has grown into a movement to democratize property discovery across India.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our platform connects buyers, sellers, and agents to make property search simple, fast, and fair. We're not just building a website—we're building trust in an industry that demands it.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Every listing, every transaction, every conversation is guided by our commitment to transparency and excellence.
              </p>
            </div>

            {/* Right: Image Collage */}
            <div className="order-1 lg:order-2 relative h-80 sm:h-96 lg:h-[500px]">
              {/* Image 1 - Top Left - Hidden on mobile */}
              <div className="hidden sm:block absolute top-0 left-0 w-40 sm:w-48 h-48 sm:h-56 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=500&fit=crop&q=80"
                  alt="Modern home"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 - Center - Full width on mobile */}
              <div className="absolute top-0 sm:bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-52 h-48 sm:h-64 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop&q=80"
                  alt="Keys"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 - Right - Hidden on mobile */}
              <div className="hidden sm:block absolute top-1/3 right-0 w-40 sm:w-48 h-48 sm:h-56 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=500&fit=crop&q=80"
                  alt="Happy family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impact in Numbers - Premium Grid */}
      <section className="relative w-full overflow-hidden py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        {/* Background with Premium Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* SVG Pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots-impact"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#dots-impact)" />
            <path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
              fill="rgba(139,92,246,0.05)"
            />
          </svg>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 uppercase">
                📊 Our Impact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Trusted By Thousands
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Real numbers that showcase our commitment to transforming real estate in India
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Stat 1 - Active Listings */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-300 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-blue-300 mb-2 sm:mb-4 font-bold">Active Listings</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 leading-tight break-words">
                  <StatCounter end={50000} duration={2} />
                </p>
              </div>
            </div>

            {/* Stat 2 - Happy Users */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-300 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2 sm:mb-4 font-bold">Happy Users</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 leading-tight break-words">
                  <StatCounter end={100000} duration={2} />
                </p>
              </div>
            </div>

            {/* Stat 3 - Expert Agents */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-300 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-violet-300 mb-2 sm:mb-4 font-bold">Expert Agents</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 leading-tight break-words">
                  <StatCounter end={500} duration={2} />
                </p>
              </div>
            </div>

            {/* Stat 4 - Years Experience */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-300 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center overflow-hidden group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-widest text-amber-300 mb-2 sm:mb-4 font-bold">Years of Excellence</p>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 leading-tight break-words">
                  <StatCounter end={15} duration={2} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Core Values - Glass Cards */}
      <section className="bg-white py-20 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs sm:text-sm uppercase tracking-[3px] text-blue-600 font-semibold">Our Foundation</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
              Core Values
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Transparency */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-200 rounded-3xl p-10 hover:bg-white/80 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-6 inline-block p-4 bg-blue-100 group-hover:bg-blue-200 rounded-2xl transition-colors">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Complete honesty in every listing, every price, every conversation. We believe trust is built on truth.
              </p>
            </div>

            {/* Value 2: Innovation */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-200 rounded-3xl p-10 hover:bg-white/80 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-6 inline-block p-4 bg-violet-100 group-hover:bg-violet-200 rounded-2xl transition-colors">
                <Zap className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We continuously evolve our platform with cutting-edge technology to serve you better, faster, smarter.
              </p>
            </div>

            {/* Value 3: Respect */}
            <div className="group bg-white/50 backdrop-blur-md border border-gray-200 rounded-3xl p-10 hover:bg-white/80 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="mb-6 inline-block p-4 bg-emerald-100 group-hover:bg-emerald-200 rounded-2xl transition-colors">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Respect</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We honor the diversity and needs of our community. Every person deserves excellent service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Footer CTA */}
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
                id="dots-cta"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#dots-cta)" />

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
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Ready to find your place?
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
              Explore thousands of properties curated just for you. Start your journey today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Primary Button */}
              <Link href="/buy">
                <button className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-900 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-emerald-500/50 flex items-center gap-2 whitespace-nowrap">
                  Explore Properties
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Secondary Button */}
              <Link href="/how-it-works">
                <button className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm flex items-center gap-2 whitespace-nowrap">
                  Learn How It Works
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

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in:nth-child(1) {
          animation-delay: 0s;
        }

        .animate-fade-in:nth-child(2) {
          animation-delay: 0.2s;
        }

        .animate-fade-in:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}
