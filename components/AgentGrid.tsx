'use client';

import { Agent } from '@/lib/agents';
import LuxuryAgentCard from './LuxuryAgentCard';

interface AgentGridProps {
  agents: Agent[];
  isLoading?: boolean;
}

export default function AgentGrid({
  agents,
  isLoading = false,
}: AgentGridProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mb-6"></div>
          <p className="text-xl text-gray-600 font-semibold">
            Finding perfect agents for you...
          </p>
        </div>
      </div>
    );
  }

  // Empty state
  if (agents.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-md mx-auto">
          <div className="text-7xl mb-6">👥</div>
          <h3 className="text-4xl font-black text-gray-900 mb-4">
            No Agents Found
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Try adjusting your filters or check back later.
          </p>
        </div>
      </div>
    );
  }

  // Grid of agents
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {agents.map((agent, index) => (
        <div
          key={agent.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 75}ms`,
          }}
        >
          <LuxuryAgentCard agent={agent} />
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
