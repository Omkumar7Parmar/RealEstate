import PageHero from "@/components/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Please read our terms carefully"
      />
      <section className="max-w-7xl mx-auto py-12">
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
