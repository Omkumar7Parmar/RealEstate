import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const priceDisplay =
    property.type === "rent"
      ? `₹${(property.price / 100000).toFixed(1)}L`
      : `₹${(property.price / 10000000).toFixed(2)}Cr`;

  return (
    <Link href={`/listings/${property.id}`}>
      <div className="group relative w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_35px_80px_-15px_rgba(0,0,0,0.15)] border border-white/50 hover:border-gray-100/80 p-6 hover:-translate-y-4 hover:scale-[1.025] transition-all duration-700 ease-out overflow-hidden cursor-pointer flex flex-col">
        {/* Image - Fixed Height */}
        <div className="relative overflow-hidden rounded-2xl h-48 mb-5 flex-shrink-0">
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-[1.08] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Status Badge with float animation */}
          <div className="absolute top-4 right-4 float-animate z-10">
            <span
              className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ring-2 whitespace-nowrap ${
                property.type === "buy"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white ring-emerald-200/50"
                  : "bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 ring-amber-200/50"
              }`}
            >
              {property.type === "buy" ? "FOR SALE" : "FOR RENT"}
            </span>
          </div>
        </div>

        {/* Content - Flex Grow */}
        <div className="space-y-3 flex-grow flex flex-col justify-between">
          {/* Title & Location */}
          <div className="min-h-[60px]">
            <h3 className="text-lg font-black text-gray-900 leading-tight line-clamp-2 h-[56px] flex items-start">
              {property.title}
            </h3>
          </div>

          <p className="text-sm text-gray-600 font-medium line-clamp-1">
            {property.location}
          </p>

          {/* Price - Fixed */}
          <div className="flex items-baseline justify-between pt-2 h-12">
            <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent leading-tight">
              {priceDisplay}
            </span>
            {property.type === "rent" && (
              <span className="text-xs text-gray-600 font-medium">/mo</span>
            )}
          </div>

          {/* Property Details Grid - Fixed */}
          <div className="grid grid-cols-3 gap-2 pt-4 mt-auto border-t border-gray-100">
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-lg font-black text-gray-900">
                {property.beds}
              </span>
              <span className="text-xs font-semibold text-gray-600 mt-0.5">
                Beds
              </span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-lg font-black text-gray-900">
                {property.baths}
              </span>
              <span className="text-xs font-semibold text-gray-600 mt-0.5">
                Baths
              </span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-lg font-black text-gray-900">
                {(property.area / 1000).toFixed(1)}k
              </span>
              <span className="text-xs font-semibold text-gray-600 mt-0.5">
                sqft
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
