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

      <section className="max-w-7xl mx-auto py-12">
        {/* Back Button */}
        <Link href="/listings" className="text-blue-600 hover:underline font-semibold mb-6 block">
          ← Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Property Info */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Bedrooms</p>
                  <p className="text-3xl font-bold">{property.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Bathrooms</p>
                  <p className="text-3xl font-bold">{property.baths}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Area</p>
                  <p className="text-3xl font-bold">{property.area.toLocaleString()} sqft</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About this Property</h2>
              <p className="text-gray-700 leading-relaxed">
                This beautiful {property.type === "rent" ? "rental" : "property"} features {property.beds} bedroom{property.beds !== 1 ? "s" : ""} and {property.baths} bathroom{property.baths !== 1 ? "s" : ""} with {property.area.toLocaleString()} square feet of living space. Located in {property.location}, it's perfect for your lifestyle needs.
              </p>
            </div>

            {/* Details List */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Property Details</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between border-b pb-2">
                  <span>Type</span>
                  <span className="font-semibold">{property.type === "rent" ? "Rental" : "For Sale"}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Location</span>
                  <span className="font-semibold">{property.location}</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Price</span>
                  <span className="font-semibold text-blue-600">{priceDisplay}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Price Card */}
            <div className="bg-white p-8 rounded-lg shadow-md sticky top-20 mb-6">
              <p className="text-sm text-gray-600 mb-2">Price</p>
              <p className="text-4xl font-bold text-blue-600 mb-6">{priceDisplay}</p>

              {/* Contact Agent */}
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 mb-3">
                Contact Agent
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50">
                Schedule Tour
              </button>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-gray-700">
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
