import PageHero from "@/components/PageHero";

export default function ComparePage() {
  return (
    <>
      <PageHero
        title="Compare Properties"
        subtitle="Side-by-side comparison to make the best decision"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Select Properties to Compare</h2>
            <p className="text-gray-700">
              Choose up to 5 properties to compare their features, prices, and
              amenities side-by-side.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Detailed Comparison</h2>
            <p className="text-gray-700">
              View key metrics like price per square foot, amenities, location
              scores, and agent ratings in one easy-to-read table.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Make Your Decision</h2>
            <p className="text-gray-700">
              Use our comparison tools to make an informed decision and schedule
              viewings for your top choices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
