import Link from 'next/link';
import { Property } from '@/lib/properties';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PremiumPropertyCardProps {
  property: Property;
}

export default function PremiumPropertyCard({ property }: PremiumPropertyCardProps) {
  const priceDisplay =
    property.type === 'rent'
      ? `₹${(property.price / 100000).toFixed(1)}L`
      : `₹${(property.price / 10000000).toFixed(2)}Cr`;

  return (
    <Link href={`/listings/${property.id}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1">
        {/* Image Section - Fixed Height */}
        <div className="relative w-full h-48 bg-slate-200 overflow-hidden flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Glass Pill Badge - Top Left */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide rounded-md">
              {property.type === 'buy' ? 'Sale' : 'Rent'}
            </span>
          </div>
        </div>

        {/* Content Section - Compact */}
        <div className="p-4 flex flex-col gap-2 flex-grow">
          {/* Header: Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-slate-900">
              {priceDisplay}
            </span>
            {property.type === 'rent' && (
              <span className="text-xs text-slate-500 font-medium">/mo</span>
            )}
          </div>

          {/* Title - Single Line */}
          <h3 className="text-sm font-medium text-slate-700 line-clamp-1">
            {property.title}
          </h3>

          {/* Location with Icon */}
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-1"></div>

          {/* Amenities Footer */}
          <div className="flex items-center gap-3 pt-1">
            {/* Beds */}
            <div className="flex items-center gap-1">
              <Bed className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-600">
                {property.beds}
              </span>
            </div>

            {/* Baths */}
            <div className="flex items-center gap-1">
              <Bath className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-600">
                {property.baths}
              </span>
            </div>

            {/* Sqft */}
            <div className="flex items-center gap-1">
              <Square className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span className="text-xs font-medium text-slate-600">
                {(property.area / 1000).toFixed(1)}k
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
