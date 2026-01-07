import PageHero from '@/components/PageHero';
import PropertyGrid from '@/components/PropertyGrid';
import { properties } from '@/lib/properties';
import { getTopRatedAgents } from '@/lib/agents';
import Link from 'next/link';

export default function HomePage() {
  const featuredProperties = properties.slice(0, 6);
  const topAgents = getTopRatedAgents(3);

  return (
    <>
      <PageHero
        title="Find Your Perfect Property"
        subtitle="Browse thousands of listings to find your ideal home"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by location..."
              className="px-4 py-3 rounded-lg border focus:outline-none"
            />
            <select className="px-4 py-3 rounded-lg border focus:outline-none">
              <option>All Property Types</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
            <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold">
              Search
            </button>
          </div>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Properties */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <Link href="/buy" className="text-blue-600 hover:underline font-semibold">
              View All →
            </Link>
          </div>
          <PropertyGrid properties={featuredProperties} columns={3} />
        </section>

        {/* Property Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Browse by Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/buy">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold">Buy</h3>
                <p className="text-blue-100 mt-2">Browse properties for sale</p>
              </div>
            </Link>
            <Link href="/rent">
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">🔑</div>
                <h3 className="text-2xl font-bold">Rent</h3>
                <p className="text-green-100 mt-2">Find rental properties</p>
              </div>
            </Link>
            <Link href="/commercial">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold">Commercial</h3>
                <p className="text-purple-100 mt-2">Commercial real estate</p>
              </div>
            </Link>
            <Link href="/new-projects">
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold">New</h3>
                <p className="text-orange-100 mt-2">New developments</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gray-100 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose RealEstate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
              <p className="text-gray-700">All properties are verified and current</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Expert Agents</h3>
              <p className="text-gray-700">Professional agents ready to help</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Easy Process</h3>
              <p className="text-gray-700">Simple and transparent transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg mb-2">Secure Platform</h3>
              <p className="text-gray-700">Your data is safe and protected</p>
            </div>
          </div>
        </section>

        {/* Top Agents */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Top Rated Agents</h2>
            <Link href="/agents" className="text-blue-600 hover:underline font-semibold">
              View All Agents →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topAgents.map((agent) => (
              <Link key={agent.id} href={`/agents/${agent.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1">{agent.name}</h3>
                    <p className="text-yellow-500 text-sm mb-3">
                      ★ {agent.rating} ({agent.reviews} reviews)
                    </p>
                    <p className="text-gray-600 text-sm">{agent.specialties[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found their perfect property with RealEstate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
                Sign Up Now
              </button>
            </Link>
            <Link href="/how-it-works">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
                Learn How It Works
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
