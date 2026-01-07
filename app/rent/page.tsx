import PageHero from '@/components/PageHero';
import PropertyGrid from '@/components/PropertyGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function RentPage() {
  const properties = getPropertiesByType('rent');

  return (
    <>
      <PageHero
        title="Rent Properties"
        subtitle="Find the perfect rental home"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <PropertyGrid properties={properties} columns={3} />
      </div>
    </>
  );
}
