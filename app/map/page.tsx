import PageHero from "@/components/PageHero";

export default function MapPage() {
  return (
    <>
      <PageHero
        title="Map Search"
        subtitle="Discover properties by location"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Interactive Map View</h2>
            <p className="text-gray-700">
              Browse properties on an interactive map. Zoom in to see detailed
              listings, prices, and property details for your target area.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Location Filters</h2>
            <p className="text-gray-700">
              Filter properties by neighborhood, price range, property type, and
              amenities to find exactly what you're looking for.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Nearby Amenities</h2>
            <p className="text-gray-700">
              View nearby schools, transit, restaurants, and other important
              amenities to evaluate neighborhoods effectively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
