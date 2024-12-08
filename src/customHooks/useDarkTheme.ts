import { darkTheme, lightTheme } from '@/styles/theme';
import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const setDarkMode = () => {
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
  };

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    isDarkMode,
    selectedTheme,
    setDarkMode,
    setLightMode,
  };
};
