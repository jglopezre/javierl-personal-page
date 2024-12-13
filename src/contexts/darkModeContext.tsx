/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useMemo } from 'react';
import { useDarkMode } from '@/customHooks/useDarkTheme';
import { DarkModeContextDataT, SimpleReactComponent } from '@/custom-types';

export const darkModeContext = createContext<DarkModeContextDataT | null>(null);

export const DarkModeContextProvider: React.FC<SimpleReactComponent> = ({ children }) => {
  const {
    isDarkMode,
    setDarkMode,
    setLightMode,
    selectedTheme,
  } = useDarkMode();

  const data = useMemo(() => ({
    isDarkMode,
    setDarkMode,
    setLightMode,
    selectedTheme,
  }), [isDarkMode]);

  return (
    <darkModeContext.Provider value={data}>
      {children}
    </darkModeContext.Provider>
  );
};
