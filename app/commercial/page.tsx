import ListingHeroSection from "@/components/ListingHeroSection";

export default function CommercialPage() {
  return (
    <>
      <ListingHeroSection
        title="Commercial Properties"
        subtitle="Find office, retail, and industrial real estate for your business needs"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80"
        propertyCount={156}
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Office Spaces</h2>
            <p className="text-gray-700">
              Browse modern office spaces and business centers across prime
              locations.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Retail Locations</h2>
            <p className="text-gray-700">
              Premium retail spaces with high foot traffic and visibility.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Industrial Properties</h2>
            <p className="text-gray-700">
              Warehouses and industrial facilities for manufacturing and storage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
