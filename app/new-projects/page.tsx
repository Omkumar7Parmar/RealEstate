import PageHero from "@/components/PageHero";

export default function NewProjectsPage() {
  return (
    <>
      <PageHero
        title="New Development Projects"
        subtitle="Explore upcoming residential and commercial developments"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Pre-Launch Projects</h2>
            <p className="text-gray-700">
              Get early access to properties before they hit the market. Register
              for exclusive project previews and special launch pricing.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Developer Information</h2>
            <p className="text-gray-700">
              Learn about established developers and their track record of quality
              construction and successful project completions.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
            <p className="text-gray-700">
              View detailed timelines, completion dates, and milestone information
              for all new development projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
