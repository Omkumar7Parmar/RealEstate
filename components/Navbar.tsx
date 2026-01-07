"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings/sale", label: "Buy" },
  { href: "/listings/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg flex items-center">
          RealEstate
        </Link>

        <nav className="flex items-center space-x-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="ml-6 pl-6 border-l">
            <Link
              href="/login"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/login"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
