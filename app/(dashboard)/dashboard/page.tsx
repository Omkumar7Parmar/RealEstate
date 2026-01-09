'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';
import Link from 'next/link';
import Image from 'next/image';
import {
  LogOut,
  Heart,
  Eye,
  Phone,
  Home,
  MapPin,
  Search,
  Bell,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

// Saved Properties Mock Data
const savedProperties = [
  {
    id: 1,
    title: 'Luxury 4BHK Apartment',
    location: 'Bandra, Mumbai',
    price: '₹2.5 Cr',
    sqft: '2,400 sq ft',
    image: '/images/properties/WhatsApp-Image-2017-09-06-at-1.45.23-PM.jpg',
  },
  {
    id: 2,
    title: 'Modern 3BHK in Andheri',
    location: 'Andheri, Mumbai',
    price: '₹1.8 Cr',
    sqft: '1,800 sq ft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Villa with Garden',
    location: 'Powai, Mumbai',
    price: '₹3.2 Cr',
    sqft: '3,000 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
  },
];

// Recent Activity Mock Data
const recentActivities = [
  {
    id: 1,
    type: 'saved',
    title: 'Saved: Luxury 4BHK Apartment in Bandra',
    subtitle: '₹2.5 Cr | 2,400 sq ft',
    time: '2 hours ago',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    image: 'https://images.unsplash.com/photo-1512917774080-9b274c3f2436?w=80&h=80&fit=crop',
  },
  {
    id: 2,
    type: 'viewed',
    title: 'Viewed: Modern 3BHK in Andheri',
    subtitle: '₹1.8 Cr | 1,800 sq ft',
    time: 'Yesterday',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=80&h=80&fit=crop',
  },
  {
    id: 3,
    type: 'contacted',
    title: 'Contacted: Agent Priya Sharma',
    subtitle: 'Inquiry about Marine Drive properties',
    time: '3 days ago',
    icon: Phone,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    image: null,
  },
  {
    id: 4,
    type: 'viewed',
    title: 'Viewed: Villa with Garden in Powai',
    subtitle: '₹3.2 Cr | 3,000 sq ft',
    time: '5 days ago',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=80&h=80&fit=crop',
  },
];

// Quick Actions Data
const quickActions = [
  {
    id: 1,
    label: 'Browse Properties',
    icon: Home,
    href: '/buy',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    label: 'Connect Agents',
    icon: MapPin,
    href: '/agents',
    color: 'from-violet-500 to-fuchsia-500',
    bgColor: 'bg-violet-100',
  },
  {
    id: 3,
    label: 'Saved Searches',
    icon: Search,
    href: '#',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
  },
  {
    id: 4,
    label: 'Price Alerts',
    icon: Bell,
    href: '#',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-100',
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, userData, isLoading, isAuthenticated, logout } = useFirebaseAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  const totalPages = Math.ceil(savedProperties.length / propertiesPerPage);
  const paginatedProperties = savedProperties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/(auth)/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoggingOut(false);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkCarouselScroll, 300);
    }
  };

  const checkCarouselScroll = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkCarouselScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkCarouselScroll);
      return () => carousel.removeEventListener('scroll', checkCarouselScroll);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-violet-600"></div>
          <p className="text-xl text-slate-600 font-semibold">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !userData) {
    return null;
  }

  const firstName = userData.name.split(' ')[0];
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* CONCIERGE WELCOME BANNER - Gradient Earth Aesthetic */}
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8">
            {/* Left: Greeting & Status */}
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-1 sm:mb-2">
                {greeting}
              </p>
              <h1 className="text-h1 text-gray-900 mb-4">
                Hey, <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                  {firstName}
                </span>
              </h1>
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 border border-gray-200 backdrop-blur-md">
                <p className="text-xs sm:text-sm text-gray-700">
                  ✨ You have <span className="font-bold text-violet-600">3 new price alerts</span> today
                </p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex-shrink-0 w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-0">
              {/* Home Button */}
              <Link href="/">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm">
                  <Home className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Home</span>
                </button>
              </Link>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-red-100 border border-red-200 hover:bg-red-200 hover:border-red-300 text-red-600 font-semibold text-xs sm:text-sm transition-all duration-300 disabled:opacity-50 shadow-sm"
              >
                <LogOut className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span>
                  {isLoggingOut ? 'Signing out...' : 'Logout'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BENTO GRID LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ROW 1: SAVED PROPERTIES - Grid with Pagination */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Your Saved Homes</h2>
              <p className="text-slate-600 mt-1">{savedProperties.length} properties saved</p>
            </div>
            <Link href="/favorites">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                View All
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.map((property) => (
              <div
                key={property.id}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-violet-400 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-colors duration-300 shadow-lg">
                      <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-black text-slate-900 text-lg mb-2">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-slate-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-black text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text">
                          {property.price}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{property.sqft}</p>
                      </div>
                      <button className="p-3 rounded-xl bg-violet-100 group-hover:bg-violet-200 transition-colors duration-300">
                        <ChevronRight className="w-5 h-5 text-violet-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-slate-900" />
              </button>
            </div>
          )}
        </div>

        {/* ROW 2: RESPONSIVE GRID - Dashboard Stats & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* SIDEBAR: Quick Stats */}
          <div className="space-y-6">
            {/* Saved Properties Stat */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-red-100 to-rose-100 rounded-xl">
                  <Heart className="w-6 h-6 text-red-600 fill-red-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold">
                    Saved
                  </p>
                  <p className="text-3xl font-black text-slate-900">12</p>
                </div>
              </div>
              <Link href="/favorites">
                <button className="text-violet-600 hover:text-violet-700 text-sm font-semibold flex items-center gap-1">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Saved Searches Stat */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold">
                    Searches
                  </p>
                  <p className="text-3xl font-black text-slate-900">5</p>
                </div>
              </div>
              <button className="text-violet-600 hover:text-violet-700 text-sm font-semibold flex items-center gap-1">
                Manage <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Price Alerts Stat */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
                  <Bell className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold">
                    Alerts
                  </p>
                  <p className="text-3xl font-black text-slate-900">3</p>
                </div>
              </div>
              <button className="text-violet-600 hover:text-violet-700 text-sm font-semibold flex items-center gap-1">
                Review <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CENTER: Recent Activity Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-slate-900 mb-6">Recent Activity</h3>

            <div className="relative space-y-4">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400 rounded-full"></div>

              {/* Activity Items */}
              {recentActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={activity.id} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-3 w-12 h-12 flex items-center justify-center">
                      <div className={`p-2.5 rounded-xl ${activity.bgColor}`}>
                        <IconComponent className={`w-5 h-5 ${activity.color}`} />
                      </div>
                    </div>

                    {/* Activity Card */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-start gap-3">
                        {/* Thumbnail */}
                        {activity.image && (
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-slate-200">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-900 text-sm">
                            {activity.title}
                          </p>
                          <p className="text-slate-600 text-xs mt-1">
                            {activity.subtitle}
                          </p>
                        </div>

                        {/* Time Badge */}
                        <div className="flex-shrink-0 text-xs text-slate-500 font-medium whitespace-nowrap">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROW 3: QUICK ACTIONS - Control Deck */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <Link key={action.id} href={action.href}>
                  <button className="w-full h-full group">
                    <div className="bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-center gap-4">
                      {/* Icon Container */}
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${action.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-slate-900" />
                      </div>

                      {/* Label */}
                      <p className="font-bold text-slate-900 text-center text-sm leading-tight">
                        {action.label}
                      </p>
                    </div>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ROW 4: CALL TO ACTION - Full Width */}
        <div className="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-slate-900 rounded-3xl overflow-hidden border border-violet-700/50">
          <div className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 text-white max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
                Ready to find your dream home?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Explore thousands of premium properties curated just for you. Start your journey now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/buy">
                  <button className="px-8 py-4 bg-white text-violet-600 font-black rounded-full hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Start Browsing
                  </button>
                </Link>
                <Link href="/agents">
                  <button className="px-8 py-4 bg-white/20 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/30 hover:border-white/50 transition-all duration-300 whitespace-nowrap">
                    Connect with Agents
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
