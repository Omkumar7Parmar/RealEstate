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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Properties Found</h3>
          <p className="text-gray-600">Try adjusting your search filters or browse other categories.</p>
        </div>
      </div>
    );
  }

  // Grid of properties
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
