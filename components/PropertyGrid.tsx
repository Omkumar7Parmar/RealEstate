"use client";

import { useState } from "react";
import { Property } from "@/lib/properties";
import PropertyCard from "./PropertyCard";
import { ChevronDown } from "lucide-react";

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
  initialCount?: number;
  loadMoreCount?: number;
}

export default function PropertyGrid({
  properties,
  isLoading = false,
  initialCount = 6,
  loadMoreCount = 6,
}: PropertyGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleProperties = properties.slice(0, visibleCount);
  const hasMore = visibleCount < properties.length;
  const remainingCount = properties.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, properties.length));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mb-6"></div>
          <p className="text-xl text-gray-600 font-semibold">
            Finding perfect homes for you...
          </p>
        </div>
      </div>
    );
  }

  // Empty state
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-md mx-auto">
          <div className="text-7xl mb-6">🏠</div>
          <h3 className="text-4xl font-black text-gray-900 mb-4">
            No Properties Found
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Try adjusting your search filters or browse other categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Grid of properties with FIXED heights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
        {visibleProperties.map((property) => (
          <div key={property.id} className="w-full h-[480px] sm:h-[520px] lg:h-[560px]">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex flex-col items-center mt-12">
          <button
            onClick={handleLoadMore}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View More
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          <p className="mt-3 text-sm text-slate-500">
            {remainingCount} more propert{remainingCount !== 1 ? "ies" : "y"} to show
          </p>
        </div>
      )}

      {/* Showing count */}
      <div className="text-center mt-6 text-sm text-slate-500">
        Showing {visibleProperties.length} of {properties.length} properties
      </div>
    </div>
  );
}
