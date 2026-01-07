import PageHero from "@/components/PageHero";

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        title="Developers"
        subtitle="Explore properties from trusted real estate developers"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Featured Developers</h2>
            <p className="text-gray-700">
              Discover top-rated developers with proven track records of quality
              construction and customer satisfaction.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Developer Profiles</h2>
            <p className="text-gray-700">
              View detailed profiles including company history, completed projects,
              current developments, and customer reviews.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Active Projects</h2>
            <p className="text-gray-700">
              Explore all current and upcoming projects from each developer with
              timelines, unit availability, and pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
