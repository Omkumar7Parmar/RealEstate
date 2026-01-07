import PageHero from "@/components/PageHero";

export default function FAQPage() {
  const faqs = [
    {
      q: "How do I search for properties?",
      a: "Use our search bar to filter by location, price range, property type, and more.",
    },
    {
      q: "Can I save my favorite properties?",
      a: "Yes, create an account and click the heart icon on any property to save it.",
    },
    {
      q: "How do I contact an agent?",
      a: "Visit any property listing and click 'Contact Agent' to send a message.",
    },
    {
      q: "Is there a fee to use the platform?",
      a: "Basic browsing is free. Premium plans offer additional features.",
    },
    {
      q: "How do I list my property?",
      a: "Create a seller account and use our 'Add Listing' tool to submit your property.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit cards, bank transfers, and digital payment methods.",
    },
  ];

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions"
      />
      <section className="max-w-7xl mx-auto py-12">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-gray-100 p-6 rounded-lg group cursor-pointer"
            >
              <summary className="font-bold text-lg flex justify-between items-center">
                {faq.q}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
