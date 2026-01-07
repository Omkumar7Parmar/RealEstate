"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import PropertyGrid from "@/components/PropertyGrid";
import { properties } from "@/lib/properties";

type FilterType = "all" | "rent" | "sale";

export default function ListingsPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type === filter);

  return (
    <>
      <PageHero
        title="Browse Properties"
        subtitle="Find your perfect home"
      />
      <section className="max-w-7xl mx-auto py-12">
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setFilter("sale")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "sale"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            For Sale
          </button>
          <button
            onClick={() => setFilter("rent")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "rent"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            For Rent
          </button>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProperties.length} propert
          {filteredProperties.length !== 1 ? "ies" : "y"}
        </p>

        {/* Property Grid */}
        <PropertyGrid properties={filteredProperties} />
      </section>
    </>
  );
}
