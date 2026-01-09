export default function NewProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <h1 className="text-h1 text-gray-900 mb-4">New Development Projects</h1>
          <p className="text-h3 text-gray-700 max-w-2xl">
            Explore upcoming residential and commercial developments
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
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
