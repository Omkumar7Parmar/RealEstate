"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { LogOut, LayoutDashboard } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings/sale", label: "Buy" },
  { href: "/listings/rent", label: "Rent" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useFirebaseAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { logout } = useFirebaseAuth();

  // Hide navbar on dashboard
  if (pathname === "/dashboard") {
    return null;
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-white/95 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100/50">
      <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-black text-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          RealEstate
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Auth Links / User Section */}
          <div className="ml-8 pl-8 border-l border-gray-200 flex items-center space-x-3">
            {!isLoading && isAuthenticated ? (
              <>
                {/* Dashboard Button */}
                <Link
                  href="/dashboard"
                  className="px-6 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Dashboard
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="px-6 py-3 rounded-xl text-base font-semibold bg-red-500/20 border-2 border-red-400/30 hover:bg-red-500/30 hover:border-red-400/50 text-red-600 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogOut className="w-5 h-5" />
                  {isLoggingOut ? "Signing out..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                {/* Login Link */}
                <Link
                  href="/login"
                  className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    pathname === "/login"
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Login
                </Link>

                {/* Sign Up Button */}
                <Link
                  href="/register"
                  className="px-8 py-3 rounded-2xl text-base font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] active:translate-y-0.5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
