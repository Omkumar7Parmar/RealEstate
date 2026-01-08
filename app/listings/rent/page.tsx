import ListingGrid from '@/components/ListingGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function RentListingsPage() {
  const rentProperties = getPropertiesByType('rent');

  return (
    <ListingGrid 
      properties={rentProperties} 
      type="rent" 
      title="Find Your Perfect Rental"
    />
  );
}
