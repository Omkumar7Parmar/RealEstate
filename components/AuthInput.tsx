'use client';

import React, { useState } from 'react';

interface AuthInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  error,
  onChange,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-gray-200 font-semibold"
      >
        {label}
      </label>

      {/* Input Field Wrapper */}
      <div className="relative">
        <input
          type={isPasswordField && showPassword ? 'text' : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-white/5 border-b-2 text-white placeholder:text-gray-400 focus:outline-none transition-all duration-300 text-sm ${
            error
              ? 'border-red-400/50 focus:border-red-400'
              : 'border-white/30 hover:border-white/50 focus:border-white/80'
          } ${isPasswordField ? 'pr-10' : ''}`}
        />

        {/* Password Visibility Toggle */}
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              /* Eye Icon - Visible */
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              /* Eye Icon - Hidden */
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M15.171 13.576l1.414 1.414A10.016 10.016 0 0020 10c-1.274-4.057-5.064-7-9.542-7a9.958 9.958 0 00-2.572.35l1.514 1.514a4 4 0 014.486 4.486l1.579 1.579zm6.097-6.097l1.414 1.414-14 14-1.414-1.414 14-14z" />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-300 text-xs font-medium mt-1">{error}</p>
      )}
    </div>
  );
}
