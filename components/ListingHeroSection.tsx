"use client";

import { useState } from "react";
import { Search, MapPin, Home, Sliders } from "lucide-react";

interface ListingHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  propertyCount?: number;
  onSearch?: (query: string, propertyType: string) => void;
  defaultTab?: "buy" | "rent" | "commercial";
}

type TabType = "buy" | "rent" | "commercial";

export default function ListingHeroSection({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80",
  propertyCount = 2847,
  onSearch,
  defaultTab = "buy",
}: ListingHeroSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: "buy", label: "Buy", icon: "🏠" },
    { id: "rent", label: "Rent", icon: "🔑" },
    { id: "commercial", label: "Commercial", icon: "🏢" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, propertyType);
    }
  };

  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        {/* Dark Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-6 sm:mb-10 space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              {title}
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Tab Switcher - Segmented Control */}
          <div className="mt-6 sm:mt-10 mb-4 sm:mb-6 flex justify-center">
            <div className="inline-flex gap-1 p-1 sm:p-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1 sm:gap-2 whitespace-nowrap ${
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
            <form onSubmit={handleSearch} className="flex flex-col gap-2 sm:gap-3">
              {/* Main Search Container */}
              <div className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-1 sm:p-1.5 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-0">
                  {/* Location Input */}
                  <div className="flex-1 flex items-center px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 lg:border-r border-white/20">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-1.5 sm:mr-2 lg:mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Location..."
                      className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none font-medium text-xs sm:text-sm"
                    />
                  </div>

                  {/* Property Type Select */}
                  <div className="flex-1 flex items-center px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 lg:border-r border-white/20">
                    <Home className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-1.5 sm:mr-2 lg:mr-3 flex-shrink-0" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none font-medium text-xs sm:text-sm cursor-pointer appearance-none"
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
                    </select>
                  </div>

                  {/* Price Range Select - Hidden on mobile, shown on tablet+ */}
                  <div className="hidden sm:flex flex-1 items-center px-4 lg:px-6 py-3 lg:py-4 lg:border-r border-white/20">
                    <span className="text-white/60 mr-2 lg:mr-3 flex-shrink-0">₹</span>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none font-medium text-xs sm:text-sm cursor-pointer appearance-none"
                    >
                      <option value="all" className="text-gray-900">
                        Any Price
                      </option>
                      <option value="0-50" className="text-gray-900">
                        ₹0 - ₹50L
                      </option>
                      <option value="50-100" className="text-gray-900">
                        ₹50L - ₹1Cr
                      </option>
                      <option value="100-200" className="text-gray-900">
                        ₹1Cr - ₹2Cr
                      </option>
                      <option value="200+" className="text-gray-900">
                        ₹2Cr+
                      </option>
                    </select>
                  </div>

                  {/* Search Button */}
                  <button
                    type="submit"
                    className="rounded-lg sm:rounded-lg lg:rounded-xl m-0.5 sm:m-1 px-3 sm:px-6 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-bold text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-1 sm:gap-2 group whitespace-nowrap"
                  >
                    <Search className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                    <span className="hidden sm:inline">Find {activeTab === "buy" ? "Properties" : activeTab === "rent" ? "Rentals" : "Commercial"}</span>
                    <span className="sm:hidden">Find</span>
                  </button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 pt-2 sm:pt-3">
                <button
                  type="button"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md flex items-center gap-1"
                >
                  <Sliders className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="hidden sm:inline">Filters</span>
                </button>
                <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">•</span>
                <p className="text-white/70 text-xs sm:text-sm">
                  <span className="font-bold text-white">{propertyCount.toLocaleString()}</span> <span className="hidden sm:inline">listings</span> available
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animated Background Blur Effect */}
      <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}
