'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import AuthInput from '@/components/AuthInput';
import { registerUser } from '@/lib/firebase-auth';
import { validateEmail, validatePassword } from '@/lib/validation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');

    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreeToTerms) {
      setGeneralError('Please agree to the terms and conditions');
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      await registerUser(formData.email, formData.password, formData.name);
      router.push('/dashboard');
    } catch (error: any) {
      setGeneralError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Join the Exclusive"
      subtitle="Create an account to unlock premium property listings"
    >
      {/* General Error Alert */}
      {generalError && (
        <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-2xl backdrop-blur-sm">
          <p className="text-red-200 text-sm font-semibold">{generalError}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <AuthInput
          label="Full Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="John Doe"
          error={errors.name}
          onChange={handleChange}
        />

        {/* Email Input */}
        <AuthInput
          label="Email Address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="you@example.com"
          error={errors.email}
          onChange={handleChange}
        />

        {/* Password Input */}
        <AuthInput
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="••••••••"
          error={errors.password}
          onChange={handleChange}
        />

        {/* Confirm Password Input */}
        <AuthInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="••••••••"
          error={errors.confirmPassword}
          onChange={handleChange}
        />

        {/* Terms & Conditions Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group pt-2">
          <div className="relative w-5 h-5 mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div
              className={`w-5 h-5 border-2 rounded transition-all duration-300 ${
                agreeToTerms
                  ? 'bg-white border-white'
                  : 'border-white/40 group-hover:border-white/60'
              }`}
            >
              {agreeToTerms && (
                <svg
                  className="w-full h-full text-slate-900 p-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="text-gray-200 text-sm leading-relaxed">
            I agree to the{' '}
            <Link href="/terms" className="text-violet-300 hover:text-violet-200 transition-colors font-semibold">
              terms and conditions
            </Link>
          </span>
        </label>

        {/* Primary Button - Gradient */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 mt-10 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-black rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl text-base uppercase tracking-wide"
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      {/* Sign In Link */}
      <div className="pt-6 border-t border-white/10">
        <p className="text-center text-gray-300 text-sm">
          Already have an account?{' '}
          <Link
            href="/(auth)/login"
            className="text-violet-300 hover:text-violet-200 font-bold transition-colors duration-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
