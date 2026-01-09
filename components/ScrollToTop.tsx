'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only scroll if the pathname actually changed (not just search params)
    if (prevPathRef.current !== pathname) {
      // Scroll to top for all page navigations
      window.scrollTo({ top: 0, behavior: 'instant' });
      prevPathRef.current = pathname;
    }
  }, [pathname, searchParams]);

  return null;
}
