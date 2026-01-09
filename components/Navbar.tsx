"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";
import { LogOut, LayoutDashboard, Menu, X, ChevronDown, Home, Key, List } from "lucide-react";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
];

const propertyDropdownLinks = [
  { href: "/listings/sale", label: "Buy", icon: Home, description: "Properties for sale" },
  { href: "/listings/rent", label: "Rent", icon: Key, description: "Properties for rent" },
  { href: "/listings", label: "All Listings", icon: List, description: "Browse all properties" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useFirebaseAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [isMobilePropertyOpen, setIsMobilePropertyOpen] = useState(false);
  const { logout } = useFirebaseAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsPropertyDropdownOpen(false);
    setIsMobilePropertyOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPropertyDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const isPropertyActive = propertyDropdownLinks.some((link) => 
    link.href === "/listings" ? pathname === "/listings" : pathname.startsWith(link.href)
  );

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-white/95 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-b border-gray-100/50">
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 h-20 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo variant="dark" size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                isActive("/") && pathname === "/"
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Property Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isPropertyActive
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Property
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPropertyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isPropertyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {propertyDropdownLinks.map((link) => {
                      const IconComponent = link.icon;
                      const active = link.href === "/listings" 
                        ? pathname === "/listings" 
                        : pathname.startsWith(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                            active
                              ? "bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-200"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`p-2.5 rounded-xl transition-all duration-300 ${
                              active
                                ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                                : "bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:text-white"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <p
                              className={`font-semibold ${
                                active ? "text-violet-700" : "text-gray-900"
                              }`}
                            >
                              {link.label}
                            </p>
                            <p className="text-sm text-gray-500">{link.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.slice(1).map((link) => {
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          {/* Home */}
          <Link
            href="/"
            className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
              pathname === "/"
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            Home
          </Link>

          {/* Property Accordion */}
          <div>
            <button
              onClick={() => setIsMobilePropertyOpen(!isMobilePropertyOpen)}
              className={`w-full px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-between ${
                isPropertyActive
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Property
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isMobilePropertyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Property Sub-menu */}
            {isMobilePropertyOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {propertyDropdownLinks.map((link) => {
                  const IconComponent = link.icon;
                  const active = link.href === "/listings" 
                    ? pathname === "/listings" 
                    : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl ${
                          active
                            ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${
                            active ? "text-violet-700" : "text-gray-900"
                          }`}
                        >
                          {link.label}
                        </p>
                        <p className="text-sm text-gray-500">{link.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {navLinks.slice(1).map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* Auth Section */}
          {!isLoading && isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="px-6 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-lg flex items-center gap-3"
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="px-6 py-4 rounded-xl text-lg font-semibold bg-red-500/20 border-2 border-red-400/30 text-red-600 flex items-center gap-3 disabled:opacity-50"
              >
                <LogOut className="w-5 h-5" />
                {isLoggingOut ? "Signing out..." : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  pathname === "/login"
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-6 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-lg text-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
