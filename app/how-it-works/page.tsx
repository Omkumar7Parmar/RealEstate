import PageHero from "@/components/PageHero";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Simple steps to find your perfect property"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Buyers</h2>
            <p className="text-gray-700">
              1. Search properties by location and criteria
              <br />
              2. Save your favorite listings
              <br />
              3. Schedule viewings with agents
              <br />
              4. Make an offer and close the deal
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Sellers</h2>
            <p className="text-gray-700">
              1. List your property with photos and details
              <br />
              2. Connect with qualified buyers
              <br />
              3. Manage inquiries and viewings
              <br />
              4. Close the sale with confidence
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">For Agents</h2>
            <p className="text-gray-700">
              1. List and promote your properties
              <br />
              2. Manage leads and inquiries
              <br />
              3. Build your reputation with reviews
              <br />
              4. Grow your business on our platform
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
