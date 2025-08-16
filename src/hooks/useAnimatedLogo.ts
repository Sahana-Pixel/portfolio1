import { useState, useCallback } from 'react';

export function useAnimatedLogo() {
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  const handleLogoClick = useCallback(() => {
    setIsLogoAnimating(true);

    // Scroll to #home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset animation flag
    setTimeout(() => setIsLogoAnimating(false), 3500);
  }, []);

  return { isLogoAnimating, handleLogoClick };
}
