import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect your data"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-8 prose prose-lg max-w-none">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information you provide when creating an account, listing
              a property, or contacting us. This includes your name, email, phone
              number, and payment information.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-700">
              We use your information to provide our services, process transactions,
              send updates, and improve our platform.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your
              personal information against unauthorized access or misuse.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal
              information. Contact us for any privacy-related requests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
