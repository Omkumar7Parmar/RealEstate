import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RealEstate - Buy, Rent & Sell Properties",
  description: "Find your perfect property. Browse thousands of listings, connect with agents, and make your real estate dreams a reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
