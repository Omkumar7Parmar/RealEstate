import Image from "next/image";
import Link from "next/link";
import { Agent } from "@/lib/agents";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Agent Image */}
      <div className="relative w-full aspect-square bg-gray-200">
        <Image
          src={agent.photoUrl}
          alt={agent.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Agent Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{agent.bio}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 font-semibold text-sm">{agent.rating}</span>
          <span className="text-gray-600 text-xs ml-2">
            ({agent.propertiesCount} properties)
          </span>
        </div>

        {/* View Profile Link */}
        <Link
          href={`/agents/${agent.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
