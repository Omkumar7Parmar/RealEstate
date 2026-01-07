import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <PageHero title="My Dashboard" subtitle="Welcome back!" />
      <section className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Saved Listings</p>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Active Searches</p>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Messages</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Viewings</p>
            <p className="text-3xl font-bold">2</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/dashboard/listings">
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 font-semibold">
                My Listings
              </button>
            </Link>
            <Link href="/dashboard/add-listing">
              <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 font-semibold">
                Add Listing
              </button>
            </Link>
            <Link href="/dashboard/profile">
              <button className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 font-semibold">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
