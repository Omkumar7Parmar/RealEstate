import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function ListingsPage() {
  return (
    <>
      <PageHero title="My Listings" subtitle="Manage your property listings" />
      <section className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Your Properties</h2>
          <Link href="/dashboard/add-listing">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              + Add Listing
            </button>
          </Link>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <p className="text-gray-600">No listings yet. Create your first listing to get started.</p>
        </div>
      </section>
    </>
  );
}
