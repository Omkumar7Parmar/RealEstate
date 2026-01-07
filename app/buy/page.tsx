import PageHero from '@/components/PageHero';
import PropertyGrid from '@/components/PropertyGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function BuyPage() {
  const properties = getPropertiesByType('sale');

  return (
    <>
      <PageHero
        title="Buy Properties"
        subtitle="Find your dream home"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <PropertyGrid properties={properties} columns={3} />
      </div>
    </>
  );
}
