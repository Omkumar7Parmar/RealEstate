"use client";

import { Heart, Bell, StickyNote, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

const savedProperties = [
  {
    id: "1",
    title: "Luxury 4BHK Apartment in Bandra",
    location: "Bandra West, Mumbai",
    price: "₹2.5 Cr",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&q=80",
    savedDate: "2 days ago",
    hasAlert: true,
  },
  {
    id: "2",
    title: "Modern 3BHK with Sea View",
    location: "Worli, Mumbai",
    price: "₹3.8 Cr",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80",
    savedDate: "1 week ago",
    hasAlert: false,
  },
  {
    id: "3",
    title: "Penthouse with Private Terrace",
    location: "Juhu, Mumbai",
    price: "₹5.2 Cr",
    image: "/images/properties/Luxury-Penthouse-4-Bedroom-for-rent-in-the-Fulton-Market-neighborhood.-Rent-at-Fulton-Market-Apartments.-190-1.webp",
    savedDate: "2 weeks ago",
    hasAlert: true,
  },
];

export default function SavedPage() {
  return (
    <>
      {/* Hero Section - Matching Contact Page Style */}
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <h1 className="text-h1 text-gray-900 mb-4">Saved Listings</h1>
          <p className="text-h3 text-gray-700 max-w-2xl">
            Your shortlisted properties in one place. Track, compare, and never miss an update.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-[clamp(4rem,10vw,8rem)]">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Your Favorites */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50 hover:border-gray-100/80 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-7 h-7 text-red-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-3">Your Favorites</h2>
            <p className="text-gray-600 leading-relaxed">
              Browse all the properties you've saved. Add notes, set price alerts, and track your shortlisted homes.
            </p>
          </div>

          {/* Organize with Notes */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50 hover:border-gray-100/80 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <StickyNote className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-3">Organize with Notes</h2>
            <p className="text-gray-600 leading-relaxed">
              Add personal notes to each property to remember your thoughts and observations from viewings.
            </p>
          </div>

          {/* Price Alerts */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50 hover:border-gray-100/80 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Bell className="w-7 h-7 text-blue-500" />
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-3">Price Alerts</h2>
            <p className="text-gray-600 leading-relaxed">
              Get notified when saved properties change price or when new similar listings become available.
            </p>
          </div>
        </div>

        {/* Saved Properties List */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900">
              Saved Properties
              <span className="ml-3 text-base font-semibold text-gray-500">({savedProperties.length})</span>
            </h2>
          </div>

          {savedProperties.length > 0 ? (
            <div className="space-y-4">
              {savedProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 bg-gray-50/80 hover:bg-gray-100/80 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-40 h-32 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.hasAlert && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Bell className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        {property.price}
                      </span>
                      <span className="text-xs text-gray-500">Saved {property.savedDate}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex sm:flex-col items-center gap-2 sm:gap-3 justify-end">
                    <Link
                      href={`/listings/${property.id}`}
                      className="p-2.5 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300"
                      title="View Property"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                    <button
                      className="p-2.5 rounded-xl bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-all duration-300"
                      title="Remove from Saved"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No saved properties yet</h3>
              <p className="text-gray-600 mb-6">Start exploring and save properties you love!</p>
              <Link
                href="/listings/sale"
                className="inline-block bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.05]"
              >
                Browse Properties
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
