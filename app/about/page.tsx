import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About RealEstate"
        subtitle="Our mission to simplify real estate for everyone"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We believe everyone deserves access to quality real estate information
              and transparent transactions. Our platform connects buyers, sellers,
              and agents to make property search simple, fast, and fair.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700">
              Transparency in all transactions, respect for our community members,
              innovation in technology, and commitment to excellent customer service.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">By the Numbers</h2>
            <p className="text-gray-700">
              500K+ active listings | 100K+ users | 5K+ agents | 15+ years of
              combined real estate experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
