import { darkTheme, lightTheme } from '@/styles/theme';
import { useEffect, useMemo, useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(() => (
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  ));

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

  const darkModeAction = useMemo(() => ({
    isDarkMode,
    selectedTheme,
    setDarkMode,
    setLightMode,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [isDarkMode]);

  return darkModeAction;
};
