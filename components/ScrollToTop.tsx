'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Exclude property search pages from auto-scroll
    const isPropertySearch = pathname?.includes('/listings') || pathname?.includes('/search');
    
    if (!isPropertySearch) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}
