export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <h1 className="text-h1 text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-h3 text-gray-700 max-w-2xl">
            Please read our terms carefully
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <div className="space-y-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing our platform, you agree to be bound by these terms and
              conditions. If you do not agree, please do not use our service.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
            <p className="text-gray-700">
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              account.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">3. Prohibited Conduct</h2>
            <p className="text-gray-700">
              Users may not engage in illegal activities, harassment, or misuse of
              the platform. We reserve the right to suspend or terminate accounts
              that violate these terms.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
            <p className="text-gray-700">
              Our platform is provided "as is" without warranties. We are not
              liable for indirect or consequential damages arising from your use
              of our service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
