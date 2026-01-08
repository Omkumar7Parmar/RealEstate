"use client";

import { useState } from "react";
import { Search, MapPin, Home } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (query: string, propertyType: string, type: "buy" | "rent" | "commercial") => void;
}

type TabType = "buy" | "rent" | "commercial";

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: "buy", label: "Buy", icon: "🏠" },
    { id: "rent", label: "Rent", icon: "🔑" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, propertyType, activeTab);
    }
  };

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80')`,
        }}
      >
        {/* Dark Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            <div className="inline-block mb-2 sm:mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 uppercase">
                ✨ Premium Real Estate Platform
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Find Your{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Home
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Discover thousands of premium properties curated by expert agents. Your dream home awaits.
            </p>
          </div>

          {/* Tab Switcher - Segmented Control */}
          <div className="mt-8 sm:mt-16 mb-4 sm:mb-6 flex justify-center">
            <div className="inline-flex gap-1 p-1 sm:p-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-lg scale-105"
                      : "text-white/70 hover:text-white/90 border border-white/20"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Glassmorphism Search Bar */}
          <div className="mt-4 sm:mt-6">
            <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:gap-4">
              {/* Main Search Container */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-1 sm:p-1.5 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-2 sm:gap-0">
                  {/* Location Input */}
                  <div className="flex-1 flex items-center px-3 sm:px-6 py-3 sm:py-4 md:border-r border-white/20">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-2 sm:mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by location..."
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none font-medium text-xs sm:text-sm md:text-base"
                    />
                  </div>

                  {/* Property Type Select */}
                  <div className="flex-1 flex items-center px-3 sm:px-6 py-3 sm:py-4 md:border-r border-white/20">
                    <Home className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-2 sm:mr-3 flex-shrink-0" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none font-medium text-xs sm:text-sm md:text-base cursor-pointer appearance-none"
                    >
                      <option value="all" className="text-gray-900">
                        All Types
                      </option>
                      <option value="house" className="text-gray-900">
                        House
                      </option>
                      <option value="apartment" className="text-gray-900">
                        Apartment
                      </option>
                      <option value="villa" className="text-gray-900">
                        Villa
                      </option>
                      <option value="commercial" className="text-gray-900">
                        Commercial
                      </option>
                      <option value="land" className="text-gray-900">
                        Land
                      </option>
                    </select>
                  </div>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="rounded-lg sm:rounded-xl md:rounded-full m-1 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-1 sm:gap-2 group"
                  >
                    <Search className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    <span className="hidden sm:inline">Find {activeTab === "buy" ? "Properties" : "Rentals"}</span>
                    <span className="sm:hidden">Find</span>
                  </button>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-4 sm:pt-6">
                <button
                  type="button"
                  className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md"
                >
                  Advanced Search
                </button>
                <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">•</span>
                <p className="text-white/70 text-xs sm:text-sm">
                  Showing <span className="font-bold text-white">2,847</span> premium properties
                </p>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  50K+
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Active Listings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  12K+
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Happy Buyers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  500+
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Expert Agents</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  4.9★
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2">Avg. Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Blur Effect */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}
