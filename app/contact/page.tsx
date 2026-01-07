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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateContactForm({
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit
    setStatus("submitting");
    setErrors({});

    // Fake API call
    setTimeout(() => {
      console.log("Form submitted:", formValues);
      setStatus("success");
      setFormValues({
        name: "",
        email: "",
        message: "",
        propertyId: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Property ID (optional) */}
        <div>
          <label htmlFor="propertyId" className="block text-sm font-medium mb-2">
            Property ID (optional)
          </label>
          <input
            type="text"
            id="propertyId"
            name="propertyId"
            value={formValues.propertyId}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="e.g., PROP-001"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            disabled={status === "submitting"}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Success Message */}
        {status === "success" && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
