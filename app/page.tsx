'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import PropertyGrid from '@/components/PropertyGrid';
import CTASection from '@/components/CTASection';
import { properties } from '@/lib/properties';
import { getTopRatedAgents } from '@/lib/agents';
import Link from 'next/link';
import { CheckCircle, Users, Zap, Shield, Home, Key, Building2, Hammer } from 'lucide-react';
import { Star } from 'lucide-react';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

const customEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

export default function HomePage() {
  const featuredSectionRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<typeof properties>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<"buy" | "rent" | "commercial">("buy");
  const { isAuthenticated, isLoading } = useFirebaseAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const featuredProperties = isSearching ? searchResults : properties.slice(0, 8);
  const topAgents = getTopRatedAgents(3);

  const handleSearch = (query: string, propertyType: string, type: "buy" | "rent" | "commercial") => {
    setSearchQuery(query);
    setSearchType(type);
    setIsSearching(true);

    // Filter properties based on search query and type
    let filtered = properties;

    // Filter by property type (buy/rent)
    if (type !== "commercial") {
      filtered = filtered.filter(p => p.type === type);
    }

    // Filter by search query (location or title)
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(
        p => 
          p.location.toLowerCase().includes(lowerQuery) || 
          p.title.toLowerCase().includes(lowerQuery)
      );
    }

    setSearchResults(filtered);

    // Scroll to featured section
    setTimeout(() => {
      featuredSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleResetSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
    setSearchResults([]);
    setSearchType("buy");
  };

  const getViewAllLink = (): string => {
    if (isSearching) {
      return searchType === "commercial" ? "/commercial" : `/${searchType}`;
    }
    return "/buy";
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Properties */}
          <motion.section 
            ref={featuredSectionRef} 
            className="py-12 sm:py-20 border-b border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: customEasing }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: customEasing, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 break-words">
                  {isSearching ? 'Search Results' : 'Featured Listings'}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 sm:mt-2 break-words">
                  {isSearching 
                    ? `Found ${featuredProperties.length} properties${searchQuery ? ` matching "${searchQuery}"` : ''}`
                    : 'Handpicked premium properties just for you'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                {isSearching && (
                  <button
                    onClick={handleResetSearch}
                    className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 text-slate-900 font-semibold text-xs sm:text-sm hover:shadow-lg transition-shadow inline-flex items-center justify-center gap-1 sm:gap-2"
                  >
                    Clear Search
                  </button>
                )}
                <Link href={getViewAllLink()} className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-xs sm:text-sm hover:shadow-lg transition-shadow inline-flex items-center justify-center gap-1 sm:gap-2">
                  View All
                  <span>→</span>
                </Link>
                </div>
                </motion.div>
                {featuredProperties.length === 0 && isSearching ? (
              <div className="text-center py-16">
                <p className="text-xl text-slate-600 font-semibold">No properties found</p>
                <p className="text-slate-500 mt-2">Try adjusting your search criteria</p>
                <Link
                  href={getViewAllLink()}
                  className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:shadow-lg transition-shadow inline-block"
                >
                  View All Properties
                </Link>
              </div>
            ) : (
              <PropertyGrid properties={featuredProperties} />
            )}
          </motion.section>

          {/* Property Types */}
          <motion.section 
            className="py-12 sm:py-20 border-b border-slate-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: customEasing }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: customEasing }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Browse by Type
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: customEasing },
                  },
                }}
              >
                <Link href="/buy">
                  <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 transition-colors">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Buy</h3>
                  <p className="text-slate-600">Browse properties for sale</p>
                  </div>
                  </Link>
                  </motion.div>

                  <motion.div
                  variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                   opacity: 1,
                   y: 0,
                   transition: { duration: 0.35, ease: customEasing },
                  },
                  }}
                  >
                  <Link href="/rent">
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 group-hover:from-green-200 transition-colors">
                    <Key className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Rent</h3>
                  <p className="text-slate-600">Find rental properties</p>
                  </div>
                  </Link>
                  </motion.div>

                  <motion.div
                  variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                   opacity: 1,
                   y: 0,
                   transition: { duration: 0.35, ease: customEasing },
                  },
                  }}
                  >
                  <Link href="/commercial">
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 group-hover:from-purple-200 transition-colors">
                    <Building2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Commercial</h3>
                  <p className="text-slate-600">Commercial real estate</p>
                  </div>
                  </Link>
                  </motion.div>

                  <motion.div
                  variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                   opacity: 1,
                   y: 0,
                   transition: { duration: 0.35, ease: customEasing },
                  },
                  }}
                  >
                  <Link href="/new-projects">
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 group-hover:from-orange-200 transition-colors">
                    <Hammer className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">New</h3>
                  <p className="text-slate-600">New developments</p>
                  </div>
                  </Link>
                  </motion.div>
                  </motion.div>
                  </motion.section>

          {/* Why Choose Us */}
          <motion.section 
            className="py-12 sm:py-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: customEasing }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-20">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: customEasing }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Why Choose RealEstate?
              </motion.h2>
              <motion.p 
                className="text-xs sm:text-sm md:text-base text-slate-300 text-center max-w-2xl mx-auto mb-8 sm:mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: customEasing, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                Trusted by thousands of buyers, sellers, and agents across India
              </motion.p>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: customEasing },
                    },
                  }}
                >
                   <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-500/20">
                     <CheckCircle className="w-8 h-8 text-blue-400" />
                   </div>
                   <h3 className="font-bold text-lg text-white mb-2">Verified Listings</h3>
                   <p className="text-slate-400">All properties are verified and current</p>
                 </motion.div>
                 <motion.div
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: customEasing },
                    },
                  }}
                >
                   <div className="mb-6 inline-flex p-4 rounded-2xl bg-cyan-500/20">
                     <Users className="w-8 h-8 text-cyan-400" />
                   </div>
                   <h3 className="font-bold text-lg text-white mb-2">Expert Agents</h3>
                   <p className="text-slate-400">Professional agents ready to help</p>
                 </motion.div>
                 <motion.div
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: customEasing },
                    },
                  }}
                >
                   <div className="mb-6 inline-flex p-4 rounded-2xl bg-violet-500/20">
                     <Zap className="w-8 h-8 text-violet-400" />
                   </div>
                   <h3 className="font-bold text-lg text-white mb-2">Easy Process</h3>
                   <p className="text-slate-400">Simple and transparent transactions</p>
                 </motion.div>
                 <motion.div
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: customEasing },
                    },
                  }}
                >
                   <div className="mb-6 inline-flex p-4 rounded-2xl bg-green-500/20">
                     <Shield className="w-8 h-8 text-green-400" />
                   </div>
                   <h3 className="font-bold text-lg text-white mb-2">Secure Platform</h3>
                   <p className="text-slate-400">Your data is safe and protected</p>
                 </motion.div>
               </motion.div>
            </div>
            </motion.section>

            {/* Top Agents */}
            <motion.section 
             className="py-12 sm:py-20 border-t border-slate-200"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4, ease: customEasing }}
             viewport={{ once: true, margin: "-100px" }}
            >
             <motion.div 
               className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.3, ease: customEasing, delay: 0.1 }}
               viewport={{ once: true, margin: "-100px" }}
             >
               <div className="flex-1 min-w-0">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 break-words">Top Rated Agents</h2>
                 <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 sm:mt-2">Meet our most trusted real estate professionals</p>
               </div>
              <Link href="/agents" className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-xs sm:text-sm hover:shadow-lg transition-shadow inline-flex items-center justify-center gap-1 sm:gap-2">
                View All
                <span>→</span>
              </Link>
              </motion.div>
              <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              >
              {topAgents.map((agent) => (
                 <motion.div
                   key={agent.id}
                   variants={{
                     hidden: { opacity: 0, y: 20 },
                     visible: {
                       opacity: 1,
                       y: 0,
                       transition: { duration: 0.35, ease: customEasing },
                     },
                   }}
                 >
                   <Link href={`/agents/${agent.id}`}>
                     <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100">
                    {/* Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden bg-slate-200">
                      <img
                        src={agent.photoUrl}
                        alt={agent.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-8 text-center">
                      <h3 className="text-xl font-black text-slate-900 mb-3">{agent.name}</h3>
                      <div className="flex items-center justify-center gap-1 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(agent.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-slate-900 ml-2">{agent.rating}</span>
                      </div>
                      <p className="text-slate-600 text-sm line-clamp-2">{agent.bio}</p>
                      </div>
                      </div>
                      </Link>
                      </motion.div>
                      ))}
                      </motion.div>
                      </motion.section>

          {/* CTA Section - Only show if not logged in */}
          {isMounted && !isLoading && !isAuthenticated && (
          <div className="border-t border-slate-200 -mx-4 sm:-mx-6 lg:-mx-8 px-0">
            <CTASection
              title="Ready to Find Your Dream Home?"
              subtitle="Join thousands of satisfied customers who've discovered their perfect property with RealEstate"
              primaryButtonText="Sign Up Now"
              primaryButtonHref="/register"
              secondaryButtonText="Learn How It Works"
              secondaryButtonHref="/how-it-works"
            />
          </div>
          )}

          {/* Welcome Section - Only show if logged in */}
          {isMounted && !isLoading && isAuthenticated && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: customEasing }}
            viewport={{ once: true, margin: "-100px" }}
            className="border-t border-slate-200 mt-20 pt-20"
          >
            <div className="max-w-4xl">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: customEasing }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
              >
                Welcome Back!
              </motion.h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl">
                Explore curated listings, save your favorites, and connect with agents to find your perfect property.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🔍",
                    title: "Browse Listings",
                    description: "Explore thousands of properties across the platform",
                    href: "/listings",
                  },
                  {
                    icon: "❤️",
                    title: "My Favorites",
                    description: "View and manage your saved properties",
                    href: "/saved",
                  },
                  {
                    icon: "👥",
                    title: "Find Agents",
                    description: "Connect with experienced real estate professionals",
                    href: "/agents",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: customEasing, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Link href={item.href}>
                      <div className="group relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-slate-200 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 cursor-pointer h-full">
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">
                          {item.description}
                        </p>
                        <div className="mt-6 text-violet-600 font-bold group-hover:translate-x-2 transition-transform">
                          Explore →
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
          )}
        </div>
      </div>
    </>
  );
}
