'use client';

import Link from 'next/link';
import { Agent } from '@/lib/agents';
import { Star } from 'lucide-react';

interface LuxuryAgentCardProps {
  agent: Agent;
}

const BACKGROUND_COLORS = [
  'bg-gradient-to-br from-cyan-400 to-blue-500',
  'bg-gradient-to-br from-amber-300 to-gray-500',
  'bg-gradient-to-br from-purple-200 to-indigo-300',
  'bg-gradient-to-br from-pink-400 to-rose-300',
  'bg-gradient-to-br from-green-400 to-teal-500',
  'bg-gradient-to-br from-orange-300 to-red-400',
];

export default function LuxuryAgentCard({ agent }: LuxuryAgentCardProps) {
  const reviewCount = agent.reviewCount || Math.floor(agent.rating * 50);
  const agentIndex = parseInt(agent.id) - 1;
  const bgColor = BACKGROUND_COLORS[agentIndex % BACKGROUND_COLORS.length];

  return (
    <Link href={`/agents/${agent.id}`}>
      <div className="group w-full cursor-pointer transition-all duration-500">
        {/* Image Container with Gradient Background */}
        <div className={`relative w-full aspect-[3/4] ${bgColor} rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-500`}>
          <img
            src={agent.photoUrl}
            alt={agent.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content Card - Clean White */}
        <div className="bg-white rounded-2xl p-6 text-center">
          {/* Name */}
          <h3 className="text-xl font-black text-gray-900 mb-4 line-clamp-2">
            {agent.name}
          </h3>

          {/* Rating - Centered */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 transition-colors ${
                    i < Math.floor(agent.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">
              {agent.rating}
            </span>
          </div>

          {/* Bio - Centered */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {agent.bio}
          </p>
        </div>
      </div>
    </Link>
  );
}
