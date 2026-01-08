import ListingHeroSection from '@/components/ListingHeroSection';
import PropertyGrid from '@/components/PropertyGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function RentPage() {
  const properties = getPropertiesByType('rent');

  return (
    <>
      <ListingHeroSection
        title="Properties for Rent"
        subtitle="Find the perfect rental home from our extensive collection of properties"
        backgroundImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop&q=80"
        propertyCount={properties.length}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PropertyGrid properties={properties} />
      </div>
    </>
  );
}
