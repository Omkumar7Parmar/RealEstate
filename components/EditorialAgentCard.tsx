'use client';

import Link from 'next/link';
import { Agent } from '@/lib/agents';
import { Star, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface EditorialAgentCardProps {
  agent: Agent;
}

export default function EditorialAgentCard({ agent }: EditorialAgentCardProps) {
  const isTopAgent = agent.rating >= 4.8;

  return (
    <Link href={`/agents/${agent.id}`}>
      <article
        className="group relative w-full h-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white dark:bg-slate-800"
        aria-label={`View profile of ${agent.name}`}
      >
        {/* Portrait Image Container */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img
            src={agent.photoUrl}
            alt={agent.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Top Agent Badge */}
          {isTopAgent && (
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white rounded-full shadow-lg">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span className="text-xs font-bold">Top Agent</span>
            </div>
          )}

          {/* Static Gradient Info (Always Visible) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5">
            {/* Name */}
            <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
              {agent.name}
            </h3>

            {/* Role */}
            <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-3">
              Real Estate Expert
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(agent.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{agent.rating}</span>
            </div>
          </div>

          {/* Interactive Overlay (Appears on Hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
            {/* Top: Close look at name/role (already visible below) */}
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom: Call-to-Action Buttons */}
            <div className="flex gap-4 justify-center">
              {/* Call Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Handle call action
                }}
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-slate-50 hover:scale-110 transition-all duration-300"
                aria-label={`Call ${agent.name}`}
              >
                <Phone className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
              </button>

              {/* Email Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Handle email action
                }}
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-slate-50 hover:scale-110 transition-all duration-300"
                aria-label={`Email ${agent.name}`}
              >
                <Mail className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
              </button>

              {/* Contact Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold uppercase tracking-wide transition-colors duration-300 shadow-lg"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
