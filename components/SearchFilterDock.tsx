'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface SearchFilterDockProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  specialties: string[];
  sortOptions: Array<{ value: string; label: string }>;
}

/**
 * SearchFilterDock - Sophisticated floating command dock with glassmorphism
 * Combines search, category filters, and sort into one unified, elegant UI
 */
export default function SearchFilterDock({
  searchQuery,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  sortBy,
  onSortChange,
  specialties,
  sortOptions,
}: SearchFilterDockProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    if (sortOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortOpen]);

  // Get current sort label
  const currentSort = sortOptions.find((opt) => opt.value === sortBy);
  const sortLabel = currentSort?.label.split(' ').slice(-2).join(' ') || 'Rating';

  return (
    <div className="my-12 flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Floating Dock Container - Glassmorphism Effect */}
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between gap-2 sm:gap-4 bg-white/85 dark:bg-slate-700/85 backdrop-blur-md border border-slate-200 dark:border-slate-600 rounded-full shadow-xl p-2 sm:p-3">
          
          {/* LEFT: Search Input */}
          <div className="flex items-center gap-3 flex-1 px-4 sm:px-2">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-0 border-0"
              aria-label="Search agents by name"
            />
          </div>

          {/* CENTER: Category Filter Pills */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-700 rounded-full p-1 mx-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => onSpecialtyChange(specialty)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  selectedSpecialty === specialty
                    ? 'bg-white dark:bg-slate-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 bg-transparent'
                }`}
                aria-pressed={selectedSpecialty === specialty}
                aria-label={`Filter by ${specialty}`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* RIGHT: Sort Dropdown */}
          <div ref={sortRef} className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 pr-4 pl-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 whitespace-nowrap"
              aria-label="Sort options"
              aria-expanded={sortOpen}
            >
              <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">Sort</span>
              <span className="hidden sm:inline">:</span>
              <span className="text-slate-900 dark:text-white">{sortLabel}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 dark:text-slate-500 transition-transform duration-300 ${
                  sortOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Sort Dropdown Menu */}
            {sortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value);
                      setSortOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-sm font-medium text-left transition-colors duration-200 ${
                      sortBy === option.value
                        ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-900 dark:text-amber-300 border-l-2 border-amber-500'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                    }`}
                    aria-label={`Sort by ${option.label}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Category Filter - Below Dock on Small Screens */}
        <div className="sm:hidden mt-3 flex flex-wrap gap-2 justify-center">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => onSpecialtyChange(specialty)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedSpecialty === specialty
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
              aria-pressed={selectedSpecialty === specialty}
              aria-label={`Filter by ${specialty}`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
