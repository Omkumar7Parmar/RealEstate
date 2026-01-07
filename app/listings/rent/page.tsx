import PageHero from "@/components/PageHero";
import PropertyGrid from "@/components/PropertyGrid";
import { getPropertiesByType } from "@/lib/properties";
import Link from "next/link";

export default function RentListingsPage() {
  const rentProperties = getPropertiesByType("rent");

  return (
    <>
      <PageHero title="Rental Properties" subtitle="Find your next rental home" />
      <section className="max-w-7xl mx-auto py-12">
        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <Link href="/listings">
            <button className="px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">
              All Properties
            </button>
          </Link>
          <button className="px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white">
            For Rent
          </button>
          <Link href="/listings/sale">
            <button className="px-6 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">
              For Sale
            </button>
          </Link>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-6">
          Showing {rentProperties.length} rental propert
          {rentProperties.length !== 1 ? "ies" : "y"}
        </p>

        {/* Property Grid */}
        <PropertyGrid properties={rentProperties} />
      </section>
    </>
  );
}
