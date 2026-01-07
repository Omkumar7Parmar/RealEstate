import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/legal/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} RealEstate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
