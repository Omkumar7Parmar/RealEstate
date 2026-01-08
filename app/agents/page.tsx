'use client';

import { useState, useMemo } from 'react';
import { agents } from '@/lib/agents';
import AgentGrid from '@/components/AgentGrid';
import { Search, Sliders } from 'lucide-react';

const SPECIALTIES = ['All', 'Luxury', 'Residential', 'Commercial', 'Investment'];

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  // Filter agents
  const filteredAgents = useMemo(() => {
    let result = agents;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.bio.toLowerCase().includes(query)
      );
    }

    if (selectedSpecialty !== 'All') {
      result = result.filter((agent) => agent.specialty === selectedSpecialty);
    }

    return result;
  }, [searchQuery, selectedSpecialty]);

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80')`,
          }}
        >
          {/* Dark Linear Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto">
            {/* Headline Section */}
            <div className="text-center mb-6 sm:mb-10 space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Meet Our Agents
              </h1>
              <p className="text-xs sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Professional real estate experts dedicated to finding your perfect property. Connect with our trusted agents today.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mt-4 sm:mt-6">
              <form className="flex flex-col gap-2 sm:gap-3">
                {/* Main Search Container */}
                <div className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-1 sm:p-1.5 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-1 sm:gap-2 lg:gap-0">
                    {/* Search Input */}
                    <div className="flex-1 flex items-center px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 lg:border-r border-white/20">
                      <Search className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-1.5 sm:mr-2 lg:mr-3 flex-shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search agents..."
                        className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none font-medium text-xs sm:text-sm"
                      />
                    </div>

                    {/* Specialty Filter */}
                    <div className="flex-1 flex items-center px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 lg:border-r border-white/20">
                      <Sliders className="w-4 sm:w-5 h-4 sm:h-5 text-white/60 mr-1.5 sm:mr-2 lg:mr-3 flex-shrink-0" />
                      <select
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className="w-full bg-transparent text-white focus:outline-none font-medium text-xs sm:text-sm cursor-pointer appearance-none"
                      >
                        {SPECIALTIES.map((spec) => (
                          <option key={spec} value={spec} className="text-gray-900">
                            {spec}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 pt-2 sm:pt-3">
                  <p className="text-white/70 text-xs sm:text-sm">
                    <span className="font-bold text-white">{filteredAgents.length}</span> agents available
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Animated Background Blur Effect */}
        <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
      </section>

      {/* Agents Grid Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {filteredAgents.length > 0 ? (
            <AgentGrid agents={filteredAgents} />
          ) : (
            <div className="text-center py-12 sm:py-20">
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                No agents found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('All');
                }}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm sm:text-base transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
