'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import AuthInput from '@/components/AuthInput';
import { loginUserWithFirebase } from '@/lib/firebase-auth';
import { validateEmail, validatePassword } from '@/lib/validation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      await loginUserWithFirebase(formData.email, formData.password);
      router.push('/dashboard');
    } catch (error: any) {
      setGeneralError(
        error.message || 'Login failed. Please check your credentials.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account to access exclusive property listings"
    >
      {/* General Error Alert */}
      {generalError && (
        <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-2xl backdrop-blur-sm">
          <p className="text-red-200 text-sm font-semibold">{generalError}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-2">
          {/* Custom Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-5 h-5">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div
                className={`w-5 h-5 border-2 rounded transition-all duration-300 ${
                  rememberMe
                    ? 'bg-white border-white'
                    : 'border-white/40 group-hover:border-white/60'
                }`}
              >
                {rememberMe && (
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
            <span className="text-gray-200 text-sm font-medium">Remember me</span>
          </label>

          {/* Forgot Password Link */}
          <Link
            href="/forgot-password"
            className="text-violet-300 hover:text-violet-200 text-sm font-medium transition-colors duration-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Primary Button - Gradient */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 mt-10 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-black rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl text-base uppercase tracking-wide"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="pt-6 border-t border-white/10">
        <p className="text-center text-gray-300 text-sm">
          Don't have an account?{' '}
          <Link
            href="/(auth)/register"
            className="text-violet-300 hover:text-violet-200 font-bold transition-colors duration-300"
          >
            Create one
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
