import PageHero from "@/components/PageHero";

export default function SavedPage() {
  return (
    <>
      <PageHero
        title="Saved Listings"
        subtitle="Your shortlisted properties in one place"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
            <p className="text-gray-700">
              Browse all the properties you've saved. Add notes, set price alerts,
              and track your shortlisted homes.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Organize with Notes</h2>
            <p className="text-gray-700">
              Add personal notes to each property to remember your thoughts and
              observations from viewings.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Price Alerts</h2>
            <p className="text-gray-700">
              Get notified when saved properties change price or when new similar
              listings become available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
