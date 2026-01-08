"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import PropertyGrid from "@/components/PropertyGrid";
import { properties } from "@/lib/properties";

type FilterType = "all" | "buy" | "rent";

export default function ListingsPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type === filter);

  return (
    <>
      <PageHero title="Browse Properties" subtitle="Find your perfect home" />

      <section className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-[clamp(6rem,12vw,10rem)]">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { key: "all", label: "All Properties" },
            { key: "buy", label: "For Sale" },
            { key: "rent", label: "For Rent" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key as FilterType)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === btn.key
                  ? btn.key === "rent"
                    ? "bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 shadow-[0_20px_40px_-10px_rgba(251,191,36,0.3)]"
                    : btn.key === "buy"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]"
                    : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 shadow-lg hover:shadow-xl"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="mb-12">
          <p className="text-xl text-gray-700 font-semibold">
            Showing{" "}
            <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {filteredProperties.length}
            </span>{" "}
            propert{filteredProperties.length !== 1 ? "ies" : "y"}
          </p>
        </div>

        {/* Property Grid */}
        <PropertyGrid properties={filteredProperties} />
      </section>
    </>
  );
}
