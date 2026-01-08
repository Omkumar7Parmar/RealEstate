import ListingHeroSection from '@/components/ListingHeroSection';
import PropertyGrid from '@/components/PropertyGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function BuyPage() {
  const properties = getPropertiesByType('buy');

  return (
    <>
      <ListingHeroSection
        title="Properties for Sale"
        subtitle="Discover thousands of premium properties available for purchase across India"
        backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&q=80"
        propertyCount={properties.length}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PropertyGrid properties={properties} />
      </div>
    </>
  );
}
