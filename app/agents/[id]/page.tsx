import Image from 'next/image';
import { getAgentById } from '@/lib/agents';
import { properties } from '@/lib/properties';
import CuratedPortfolioGrid from '@/components/CuratedPortfolioGrid';
import Link from 'next/link';
import { ChevronLeft, Star } from 'lucide-react';

export default async function AgentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = getAgentById(id);

  if (!agent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Agent Not Found</h1>
          <Link href="/agents" className="text-blue-600 hover:underline">
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  // Get properties handled by this agent
  const agentProperties = properties.filter((p) =>
    agent.properties.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-white py-8 sm:py-16 lg:py-20">
      {/* Back Button - Floating Icon */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/agents"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 text-gray-900 transition-all hover:scale-110"
          aria-label="Back to agents"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column - Agent Profile */}
          <div className="lg:col-span-3">
            {/* Agent Portrait Image - Vertical Aspect Ratio */}
            <div className="relative w-64 aspect-[3/4] bg-slate-200 dark:bg-slate-700 rounded-3xl overflow-hidden shadow-2xl mb-10">
              <Image
                src={agent.photoUrl}
                alt={agent.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Agent Name - Serif Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 mb-3 leading-tight">
              {agent.name}
            </h1>

            {/* Rating & Role Subtitle */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(agent.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {agent.rating} Client Rating · {agent.specialty}
              </span>
            </div>

            {/* Bio - Rich Editorial Style */}
            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-xl">
              {agent.bio}
            </p>

            {/* Stats Row - Minimalist Divider */}
            <div className="flex items-center gap-8 pb-12 border-b border-gray-200 mb-12">
              <div>
                <p className="text-4xl sm:text-5xl font-black text-gray-900">
                  {agent.propertiesCount}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                  Active Listings
                </p>
              </div>

              <div className="w-px h-12 bg-gray-300"></div>

              <div>
                <p className="text-4xl sm:text-5xl font-black text-gray-900">
                  {agent.rating}
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                  Average Rating
                </p>
              </div>

              {agent.yearsExperience && (
                <>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div>
                    <p className="text-4xl sm:text-5xl font-black text-gray-900">
                      {agent.yearsExperience}+
                    </p>
                    <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">
                      Years Experience
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Curated Portfolio Section */}
            {agentProperties.length > 0 && (
              <div className="mt-20">
                <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-12">
                  Curated Portfolio
                </h2>
                <CuratedPortfolioGrid properties={agentProperties} />
              </div>
            )}
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-lg">
              {/* Contact Header */}
              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                Connect With {agent.name.split(' ')[0]}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                Get in touch to discuss properties, schedule viewings, or learn more about how we can help you find your perfect real estate.
              </p>

              {/* Primary CTA Button */}
              <button className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mb-4 transform hover:scale-105">
                Book Consultation
              </button>

              {/* Secondary CTA Button */}
              <button className="w-full py-4 px-6 bg-gray-100 text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-200 mb-6">
                View All Properties
              </button>

              {/* Contact Info */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Email</p>
                  <p className="text-gray-900 font-medium text-sm">
                    {agent.name.toLowerCase().replace(/\s+/g, '.')}@luxuryrealestate.com
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Phone</p>
                  <p className="text-gray-900 font-medium text-sm">+91 98765 {String(parseInt(agent.id) * 4321).padStart(5, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
