import PageHero from "@/components/PageHero";

export default function AddListingPage() {
  return (
    <>
      <PageHero title="Add New Listing" subtitle="Sell or rent your property" />
      <section className="max-w-4xl mx-auto py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Property Type</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Listing Type</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Street Address"
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="City"
                className="px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <input type="number" placeholder="Bedrooms" className="px-4 py-2 border rounded-lg" />
              <input type="number" placeholder="Bathrooms" className="px-4 py-2 border rounded-lg" />
              <input type="number" placeholder="Sqft" className="px-4 py-2 border rounded-lg" />
            </div>

            <input type="number" placeholder="Price" className="w-full px-4 py-2 border rounded-lg" />

            <textarea placeholder="Description" className="w-full px-4 py-2 border rounded-lg h-32" />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Publish Listing
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
