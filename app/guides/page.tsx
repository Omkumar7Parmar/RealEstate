import PageHero from "@/components/PageHero";

export default function GuidesPage() {
  return (
    <>
      <PageHero
        title="Guides & Resources"
        subtitle="Learn how to buy, sell, and rent with confidence"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Buyer's Guide</h2>
            <p className="text-gray-700">
              Everything first-time and experienced buyers need to know about
              purchasing property, from financing to closing.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Seller's Guide</h2>
            <p className="text-gray-700">
              Maximize your property's value with proven strategies for listing,
              marketing, and negotiating offers.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Renter's Guide</h2>
            <p className="text-gray-700">
              Tips for finding the perfect rental, understanding leases, and
              protecting your rights as a tenant.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
