import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { agents } from '@/lib/agents';

export default function AgentsPage() {
  return (
    <>
      <PageHero
        title="Real Estate Agents"
        subtitle="Find the perfect agent for you"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Link key={agent.id} href={`/agents/${agent.id}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
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
                  <p className="text-gray-600 text-sm mb-4">{agent.bio}</p>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>{agent.listings} listings</span>
                    <span>{agent.region}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
