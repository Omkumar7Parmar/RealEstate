export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <h1 className="text-h1 text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-h3 text-gray-700 max-w-2xl">
            How we protect your data
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
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
