"use client";

import { useState } from "react";
import { validateContactForm } from "@/lib/validation";

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    propertyId: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    const newErrors = validateContactForm({
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrors({ submit: data.error || "Failed to send message" });
        return;
      }

      setStatus("success");
      setFormValues({
        name: "",
        email: "",
        message: "",
        propertyId: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrors({ submit: "An error occurred. Please try again." });
    }
  };

  return (
    <>
      <section className="gradient-earth py-[clamp(8rem,20vh,12rem)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-10%,rgba(120,119,198,0.2),transparent)]" />
        <div className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <h1 className="text-h1 text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-h3 text-gray-700 max-w-2xl">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-[clamp(6rem,12vw,10rem)]">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-8 bg-white/95 backdrop-blur-sm rounded-3xl p-[clamp(1.5rem,4vw,2.5rem)] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50 hover:border-gray-100/80"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-base font-bold text-gray-900 mb-3">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-600 font-bold text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-bold text-gray-900 mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-600 font-bold text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Property ID */}
          <div>
            <label htmlFor="propertyId" className="block text-base font-bold text-gray-900 mb-3">
              Property ID (Optional)
            </label>
            <input
              type="text"
              id="propertyId"
              name="propertyId"
              value={formValues.propertyId}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300"
              placeholder="e.g., PROP-001"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-base font-bold text-gray-900 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              rows={6}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 disabled:bg-gray-50 disabled:cursor-not-allowed resize-none transition-all duration-300"
              placeholder="Tell us about your inquiry..."
            />
            {errors.message && (
              <p className="text-red-600 font-bold text-sm mt-2">{errors.message}</p>
            )}
          </div>

          {/* Success Message */}
          {status === "success" && (
            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-500 text-emerald-800 rounded-2xl font-bold text-lg">
              ✓ Thank you! We'll be in touch shortly.
            </div>
          )}

          {/* Error Message */}
          {status === "error" && errors.submit && (
            <div className="p-6 bg-red-50 border-2 border-red-500 text-red-800 rounded-2xl font-bold text-lg">
              ✗ {errors.submit}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] active:translate-y-0.5 ring-4 ring-emerald-200/50 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
