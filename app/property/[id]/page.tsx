import { getPropertyById } from '@/lib/properties';
import { getAgentById } from '@/lib/agents';
import Link from 'next/link';

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyById(params.id);
  const agent = property ? getAgentById("1") : null;

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Property not found</h1>
      </div>
    );
  }

  const typeLabel = property.type === 'rent' ? 'For Rent' : 'For Sale';
  const priceLabel = property.type === 'rent' ? `₹${(property.price / 100000).toFixed(1)}L/month` : `₹${(property.price / 10000000).toFixed(2)}Cr`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href={property.type === 'rent' ? "/listings/rent" : "/listings/sale"} className="text-blue-600 hover:underline mb-6 block">
        ← Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Main Image - Premium Gallery Style */}
          <div className="relative group mb-8">
            <div className="h-96 sm:h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Image Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Featured
            </div>
          </div>

          {/* Property Title & Location */}
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 text-lg mb-8">{property.location}</p>

          {/* Price & Key Details */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100 mb-8">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <p className="text-gray-600 text-sm font-semibold mb-1">Price</p>
                <p className="text-4xl font-black text-blue-600">{priceLabel}</p>
              </div>
              <span className="px-4 py-2 bg-blue-600 text-white font-bold rounded-2xl text-sm">
                {typeLabel}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm font-semibold mb-1">Bedrooms</p>
                <p className="text-3xl font-black text-gray-900">{property.beds}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm font-semibold mb-1">Bathrooms</p>
                <p className="text-3xl font-black text-gray-900">{property.baths}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-gray-600 text-sm font-semibold mb-1">Area (sqft)</p>
                <p className="text-3xl font-black text-gray-900">{(property.area / 1000).toFixed(1)}k</p>
              </div>
            </div>
          </div>

          {/* Property Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Property Overview</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Location</p>
                  <p className="text-gray-900 font-bold">{property.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📏</span>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Total Area</p>
                  <p className="text-gray-900 font-bold">{property.area.toLocaleString()} sqft</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛏️</span>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Bedrooms</p>
                  <p className="text-gray-900 font-bold">{property.beds} Bedrooms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚿</span>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">Bathrooms</p>
                  <p className="text-gray-900 font-bold">{property.baths} Bathrooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Contact Agent */}
        <div className="lg:col-span-1">
          {agent && (
            <div className="sticky top-32 bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Agent</h3>

              {/* Agent Card */}
              <div className="text-center mb-8">
                <img
                  src={agent.photoUrl}
                  alt={agent.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <p className="text-xl font-bold text-gray-900">{agent.name}</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-bold text-gray-900">{agent.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{agent.bio}</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link href={`/property/${property.id}/contact`}>
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:shadow-lg transition-all duration-300">
                    Message Agent
                  </button>
                </Link>
                <button className="w-full py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  Schedule Viewing
                </button>
              </div>

              {/* Save Property */}
              <button className="w-full mt-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                <span>❤️</span> Save Property
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
