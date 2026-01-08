import { getPropertyById } from '@/lib/properties';
import { getAgentById } from '@/lib/agents';
import Link from 'next/link';

export default function ContactAgentPage({
  params,
}: {
  params: { id: string };
}) {
  const property = getPropertyById(params.id);
  // Get first agent as default
  const agent = getAgentById('1');

  if (!property || !agent) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Page not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href={`/property/${property.id}`} className="text-blue-600 hover:underline mb-6 block">
        ← Back to property
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Contact Agent</h1>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Property</h3>
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <p className="font-semibold">{property.title}</p>
            <p className="text-gray-600 text-sm">{property.location}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Agent</h3>
            <img
              src={agent.photoUrl}
              alt={agent.name}
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            <p className="font-semibold text-lg">{agent.name}</p>
            <p className="text-yellow-500 text-sm mb-3">★ {agent.rating}</p>
            <p className="text-sm text-gray-600 mb-4">{agent.bio}</p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3 border rounded-lg h-32"
              placeholder="I'm interested in this property..."
            />
          </div>

          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-sm">I'd like to schedule a property visit</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
