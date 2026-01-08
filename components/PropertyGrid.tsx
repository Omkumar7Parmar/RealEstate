import { Property } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
}

export default function PropertyGrid({
  properties,
  isLoading = false,
}: PropertyGridProps) {
  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mb-6"></div>
          <p className="text-xl text-gray-600 font-semibold">
            Finding perfect homes for you...
          </p>
        </div>
      </div>
    );
  }

  // Empty state
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-md mx-auto">
          <div className="text-7xl mb-6">🏠</div>
          <h3 className="text-4xl font-black text-gray-900 mb-4">
            No Properties Found
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Try adjusting your search filters or browse other categories.
          </p>
        </div>
      </div>
    );
  }

  // Grid of properties with FIXED heights
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
      {properties.map((property) => (
        <div key={property.id} className="w-full h-[480px] sm:h-[520px] lg:h-[560px]">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}
