import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice =
    property.type === "rent"
      ? `₹${(property.price / 100000).toFixed(1)}L/month`
      : `₹${(property.price / 10000000).toFixed(2)}Cr`;

  return (
    <Link href={`/listings/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Tag Badge */}
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {property.type === "rent" ? "For Rent" : "For Sale"}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {property.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{property.location}</p>

          {/* Price */}
          <p className="text-xl font-bold text-blue-600 mb-4">{formattedPrice}</p>

          {/* Property Details */}
          <div className="flex justify-between text-sm text-gray-700 border-t pt-3 mt-auto">
            <span>{property.beds} bed{property.beds !== 1 ? "s" : ""}</span>
            <span>{property.baths} bath{property.baths !== 1 ? "s" : ""}</span>
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
