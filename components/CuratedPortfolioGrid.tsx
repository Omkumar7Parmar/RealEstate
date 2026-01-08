import { Property } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

interface CuratedPortfolioGridProps {
  properties: Property[];
}

export default function CuratedPortfolioGrid({
  properties,
}: CuratedPortfolioGridProps) {
  // Empty state
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-md mx-auto">
          <div className="text-7xl mb-6">🏠</div>
          <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            No Properties
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            This agent doesn't have any properties listed yet.
          </p>
        </div>
      </div>
    );
  }

  // Grid of properties - refined for agent profile
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {properties.map((property) => (
        <div key={property.id} className="w-full h-[520px]">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}
