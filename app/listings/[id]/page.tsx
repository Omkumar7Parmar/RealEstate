import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getPropertyById } from "@/lib/properties";
import { notFound } from "next/navigation";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const priceDisplay =
    property.type === "rent"
      ? `₹${(property.price / 100000).toFixed(1)}L/month`
      : `₹${(property.price / 10000000).toFixed(2)}Cr`;

  return (
    <>
      <PageHero
        title={property.title}
        subtitle={property.location}
        backgroundImage={property.imageUrl}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back Button */}
        <Link href="/listings" className="text-blue-600 hover:underline font-semibold mb-4 sm:mb-6 block text-sm sm:text-base">
          ← Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-xl sm:rounded-lg overflow-hidden mb-6 sm:mb-8">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Property Info */}
            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-lg mb-6 sm:mb-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Bedrooms</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{property.beds}</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Bathrooms</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{property.baths}</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Area</p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{property.area.toLocaleString()} <span className="text-sm sm:text-base font-normal">sqft</span></p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About this Property</h2>
              <p className="text-gray-700 leading-relaxed">
                This beautiful {property.type === "rent" ? "rental" : "property"} features {property.beds} bedroom{property.beds !== 1 ? "s" : ""} and {property.baths} bathroom{property.baths !== 1 ? "s" : ""} with {property.area.toLocaleString()} square feet of living space. Located in {property.location}, it's perfect for your lifestyle needs.
              </p>
            </div>

            {/* Details List */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Property Details</h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex justify-between border-b pb-2">
                  <span>Type</span>
                  <span className="font-semibold">{property.type === "rent" ? "Rental" : "For Sale"}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Location</span>
                  <span className="font-semibold text-right max-w-[60%]">{property.location}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Price</span>
                  <span className="font-semibold text-blue-600">{priceDisplay}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24">
            {/* Price Card */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-lg shadow-md mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Price</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{priceDisplay}</p>

              {/* Contact Agent */}
              <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-700 mb-2 sm:mb-3 text-sm sm:text-base">
                Contact Agent
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-50 text-sm sm:text-base">
                Schedule Tour
              </button>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-xl sm:rounded-lg">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Facts</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                <li>
                  <span className="font-semibold">Beds:</span> {property.beds}
                </li>
                <li>
                  <span className="font-semibold">Baths:</span> {property.baths}
                </li>
                <li>
                  <span className="font-semibold">Area:</span> {property.area.toLocaleString()} sqft
                </li>
                <li>
                  <span className="font-semibold">Location:</span> {property.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
