"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const NavigationHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we need to scroll to a section
    const section = searchParams.get('section');
    if (section) {
      // Small delay to ensure the section is rendered
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        // Clean up the URL
        window.history.replaceState({}, '', '/');
      }, 100);
    }
  }, [searchParams]);

  return null; // This component doesn't render anything
};

export default NavigationHandler; 