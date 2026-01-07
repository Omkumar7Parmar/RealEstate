import PageHero from "@/components/PageHero";
import PropertyGrid from "@/components/PropertyGrid";
import { getPropertiesByType } from "@/lib/properties";
import Link from "next/link";

export default function SaleListingsPage() {
  const saleProperties = getPropertiesByType("buy");

  return (
    <>
      <PageHero title="Properties for Sale" subtitle="Find your dream home" />
      <section className="max-w-7xl mx-auto py-12">
        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <Link href="/listings">
            <button className="px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">
              All Properties
            </button>
          </Link>
          <Link href="/listings/rent">
            <button className="px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">
              For Rent
            </button>
          </Link>
          <button className="px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white">
            For Sale
          </button>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          Showing {saleProperties.length} propert
          {saleProperties.length !== 1 ? "ies" : "y"}
        </p>

        {/* Property Grid */}
        <PropertyGrid properties={saleProperties} />
      </section>
    </>
  );
}
