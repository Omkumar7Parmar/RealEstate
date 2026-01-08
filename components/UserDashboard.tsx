'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Heart,
  Eye,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Bell,
  Search,
  TrendingUp,
  MapPin,
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
  {
    id: 4,
    title: 'Beachfront Penthouse',
    location: 'Marine Drive, Mumbai',
    price: '₹5.5 Cr',
    sqft: '3,500 sq ft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
  },
];

// Recent Activity Mock Data
const recentActivities = [
  {
    id: 1,
    type: 'saved',
    action: 'SAVED',
    actionColor: 'text-emerald-600',
    title: 'Luxury 4BHK Apartment',
    time: '2 hours ago',
    isProperty: true,
    image: '/images/properties/WhatsApp-Image-2017-09-06-at-1.45.23-PM.jpg',
    href: '/properties/1',
  },
  {
    id: 2,
    type: 'viewed',
    action: 'VIEWED',
    actionColor: 'text-blue-600',
    title: 'Modern 3BHK in Andheri',
    time: 'Yesterday',
    isProperty: true,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    href: '/properties/2',
  },
  {
    id: 3,
    type: 'contacted',
    action: 'CONTACTED',
    actionColor: 'text-purple-600',
    title: 'Agent Priya Sharma',
    time: '3 days ago',
    isProperty: false,
    image: '/images/agents/Priya Sharma.jpg',
    href: '/agents/priya-sharma',
  },
  {
    id: 4,
    type: 'viewed',
    action: 'VIEWED',
    actionColor: 'text-blue-600',
    title: 'Villa with Garden',
    time: '5 days ago',
    isProperty: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    href: '/properties/3',
  },
  {
    id: 5,
    type: 'saved',
    action: 'SAVED',
    actionColor: 'text-emerald-600',
    title: 'Beachfront Penthouse',
    time: '1 week ago',
    isProperty: true,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    href: '/properties/4',
  },
];

interface UserDashboardProps {
  userName: string;
  greeting: string;
}

export default function UserDashboard({ userName, greeting }: UserDashboardProps) {
  const firstName = userName.split(' ')[0];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 280;
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

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ========== SECTION 1: CONCIERGE WELCOME HEADER ========== */}
        <div className="mb-8 sm:mb-12">
          {/* Main Greeting */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-tight">
              Good {greeting.split(' ')[1]}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">{firstName}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">Welcome back to your property dashboard</p>
          </div>

          {/* Notification Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-indigo-50 border border-indigo-200 shadow-sm">
            <Bell className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-indigo-700">
              You have <span className="font-bold">3 new price alerts</span> today
            </span>
          </div>
        </div>

        {/* ========== SECTION 2: BENTO GRID LAYOUT ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* -------- BLOCK A: SAVED HOMES GALLERY (Spans 2 Columns) -------- */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900">
                    Saved Properties
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">12 homes you're interested in</p>
                </div>
                <Link href="/favorites">
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm font-semibold text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Carousel Container */}
              <div className="flex-1 px-4 sm:px-6 py-4 sm:py-6 overflow-hidden relative">
                <div className="relative">
                  {/* Carousel */}
                  <div
                    ref={carouselRef}
                    className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2"
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {savedProperties.map((property) => (
                      <div
                        key={property.id}
                        className="flex-shrink-0 w-56 sm:w-64 group cursor-pointer"
                      >
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-violet-300 hover:shadow-xl transition-all duration-300 h-72 sm:h-80 flex flex-col">
                          {/* Image Container */}
                          <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            {/* Price Badge (Overlaid) */}
                            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                              <p className="text-sm sm:text-base font-black text-white">
                                {property.price}
                              </p>
                            </div>
                            {/* Favorite Button */}
                            <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-300 shadow-lg">
                              <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-red-600 fill-red-600" />
                            </button>
                          </div>

                          {/* Info Section */}
                          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
                            <div>
                              <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-2 mb-1">
                                {property.title}
                              </h3>
                              <div className="flex items-center gap-1 text-xs text-slate-500">
                                <MapPin className="w-3 h-3 flex-shrink-0" />
                                {property.location}
                              </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                              {property.sqft}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  {canScrollLeft && (
                    <button
                      onClick={() => scrollCarousel('left')}
                      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                    </button>
                  )}
                  {canScrollRight && (
                    <button
                      onClick={() => scrollCarousel('right')}
                      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* -------- BLOCK B: QUICK STATS (Spans 1 Column) -------- */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            {/* Stat Card 1: Saved Searches */}
            <div className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1">
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <Search className="w-32 sm:w-40 h-32 sm:h-40 text-slate-900" />
              </div>

              {/* Glass Effect Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-blue-600 mb-2">
                  Saved Searches
                </p>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                  5
                </p>
                <p className="text-xs text-slate-500 mt-2">active filters</p>
              </div>
            </div>

            {/* Stat Card 2: Price Alerts */}
            <div className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1">
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <TrendingUp className="w-32 sm:w-40 h-32 sm:h-40 text-slate-900" />
              </div>

              {/* Glass Effect Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 shadow-sm group-hover:shadow-xl group-hover:border-emerald-200 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
                <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-emerald-600 mb-2">
                  Price Alerts
                </p>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                  3
                </p>
                <p className="text-xs text-slate-500 mt-2">today</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 3: RECENT ACTIVITY - MEDIA LIST (Full Width) ========== */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900">
                Recent Activity
              </h2>
            </div>

            {/* Activity List */}
            <div className="space-y-0 divide-y divide-gray-50">
              {recentActivities.slice(0, 5).map((activity) => (
                <Link key={activity.id} href={activity.href}>
                  <div className="flex items-center gap-4 py-4 group cursor-pointer hover:bg-gray-50 transition-colors duration-300 rounded-lg px-2">
                    {/* Thumbnail (Left) */}
                    <div className="flex-shrink-0 relative">
                      {activity.image ? (
                        activity.isProperty ? (
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-16 h-16 rounded-lg object-cover bg-gray-100 shadow-sm"
                          />
                        ) : (
                          <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-16 h-16 rounded-full object-cover bg-gray-100 shadow-sm"
                          />
                        )
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm">
                          <MapPin className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Content (Middle) */}
                    <div className="flex-1 min-w-0">
                      {/* Action Tag */}
                      <p className={`text-xs font-black tracking-wider uppercase ${activity.actionColor} mb-1`}>
                        {activity.action}
                      </p>
                      {/* Title */}
                      <p className="text-sm font-bold text-slate-800 line-clamp-1">
                        {activity.title}
                      </p>
                      {/* Time */}
                      <p className="text-xs text-gray-400 mt-0.5">
                        {activity.time}
                      </p>
                    </div>

                    {/* Action Icon (Right) */}
                    <div className="flex-shrink-0 text-gray-300 group-hover:text-gray-600 transition-colors duration-300">
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
