import { getPropertyById } from '@/lib/properties';
import { getAgentById } from '@/lib/agents';
import Link from 'next/link';

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyById(params.id);
  const agent = property ? getAgentById(property.agentId) : null;

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Property not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/buy" className="text-blue-600 hover:underline mb-6 block">
        ← Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden mb-8">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{property.address}</p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {property.type === 'rent'
                ? `$${property.price}/month`
                : `$${property.price.toLocaleString()}`}
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Bedrooms</p>
                <p className="text-2xl font-bold">{property.beds}</p>
              </div>
              <div>
                <p className="text-gray-600">Bathrooms</p>
                <p className="text-2xl font-bold">{property.baths}</p>
              </div>
              <div>
                <p className="text-gray-600">Square Feet</p>
                <p className="text-2xl font-bold">{property.sqft.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                >
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-20">
            <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
            {agent && (
              <>
                <div className="text-center mb-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3"
                  />
                  <h4 className="font-bold text-lg">{agent.name}</h4>
                  <p className="text-yellow-500 text-sm">★ {agent.rating} ({agent.reviews} reviews)</p>
                </div>
              </>
            )}
            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg h-24"
              />
            </div>
            <Link href={`/property/${property.id}/contact`}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                Send Inquiry
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
