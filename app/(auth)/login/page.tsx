"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { validateLoginForm } from "@/lib/validation";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateLoginForm(formValues);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    setTimeout(() => {
      console.log("Login attempt:", formValues);
      setStatus("success");
      setFormValues({
        email: "",
        password: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <PageHero title="Sign In" subtitle="Welcome back" />
      <section className="max-w-md mx-auto py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {status === "success" && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-sm">
                Login successful! Redirecting...
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
