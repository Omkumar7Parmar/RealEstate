import ListingGrid from '@/components/ListingGrid';
import { getPropertiesByType } from '@/lib/properties';

export default function SaleListingsPage() {
  const saleProperties = getPropertiesByType('buy');

  return (
    <ListingGrid 
      properties={saleProperties} 
      type="buy" 
      title="Discover Your Dream Home"
    />
  );
}
