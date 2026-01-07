import { getAgentById, getPropertiesByAgent } from '@/lib/agents';
import PropertyGrid from '@/components/PropertyGrid';
import Link from 'next/link';

export default function AgentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const agent = getAgentById(params.id);
  const properties = agent ? getPropertiesByAgent(params.id) : [];

  if (!agent) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Agent not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/agents" className="text-blue-600 hover:underline mb-6 block">
        ← Back to agents
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{agent.name}</h1>
          <p className="text-yellow-500 text-lg mb-2">
            ★ {agent.rating} ({agent.reviews} reviews)
          </p>
          <p className="text-gray-600 text-lg mb-6">{agent.bio}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-600">Active Listings</p>
              <p className="text-3xl font-bold">{agent.listings}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-600">Rating</p>
              <p className="text-3xl font-bold">{agent.rating}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-gray-600">Reviews</p>
              <p className="text-3xl font-bold">{agent.reviews}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Specialties</h3>
            <div className="flex flex-wrap gap-3">
              {agent.specialties.map((specialty) => (
                <div
                  key={specialty}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Featured Listings</h3>
            <PropertyGrid properties={properties} columns={3} />
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-20">
            <h3 className="text-xl font-bold mb-6">Contact Agent</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-gray-600 text-sm">Phone</p>
                <p className="font-semibold">{agent.phone}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="font-semibold break-all">{agent.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Region</p>
                <p className="font-semibold">{agent.region}</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 mb-3">
              Send Message
            </button>
            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
