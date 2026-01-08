'use client';

import { useState } from 'react';
import PremiumPropertyCard from '@/components/PremiumPropertyCard';
import { Property } from '@/lib/properties';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface ListingGridProps {
  properties: Property[];
  type: 'buy' | 'rent';
  title: string;
}

export default function ListingGrid({ properties, type, title }: ListingGridProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');

  // Sort properties based on selection
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const accentColor = type === 'buy' ? 'from-emerald-600 to-teal-600' : 'from-amber-600 to-orange-600';

  return (
    <>
      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40 w-full">
        <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left: Segmented Control for Buy/Rent */}
              <div className="bg-gray-100 rounded-full p-1 inline-flex">
                <Link href="/listings/sale">
                  <button
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      type === 'buy'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    For Sale
                  </button>
                </Link>
                <Link href="/listings/rent">
                  <button
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      type === 'rent'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    For Rent
                  </button>
                </Link>
              </div>

              {/* Right: Sort Dropdown */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-transparent">
                <TrendingUp className="w-4 h-4 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-2">
            {title}
          </h2>
          <p className="text-lg text-slate-600">
            Showing{' '}
            <span className={`text-2xl font-black bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
              {sortedProperties.length}
            </span>{' '}
            premium propert{sortedProperties.length !== 1 ? 'ies' : 'y'}
          </p>
        </div>

        {/* Empty State */}
        {sortedProperties.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            {sortedProperties.map((property, index) => (
              <div
                key={property.id}
                className="h-full animate-fade-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <PremiumPropertyCard property={property} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
