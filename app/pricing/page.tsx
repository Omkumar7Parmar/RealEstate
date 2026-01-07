import PageHero from "@/components/PageHero";

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing Plans"
        subtitle="Choose the perfect plan for your needs"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">Free</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✓ Browse listings</li>
              <li>✓ Save properties</li>
              <li>✓ Basic filters</li>
            </ul>
            <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg transform scale-105">
            <div className="text-xs font-bold bg-white text-blue-600 w-fit px-3 py-1 rounded-full mb-4">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-6">$9.99/mo</p>
            <ul className="space-y-3 mb-8">
              <li>✓ Everything in Basic</li>
              <li>✓ Advanced filters</li>
              <li>✓ Price alerts</li>
              <li>✓ 50 saved listings</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100">
              Start Free Trial
            </button>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Business</h3>
            <p className="text-3xl font-bold text-blue-600 mb-6">$49/mo</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✓ Everything in Pro</li>
              <li>✓ List properties</li>
              <li>✓ Lead management</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
