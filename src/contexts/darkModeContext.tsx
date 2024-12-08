/* eslint-disable react-hooks/exhaustive-deps */
import { useDarkMode } from '@/customHooks/useDarkTheme';
import React, { createContext, useMemo } from 'react';
import { SimpleReactComponent } from '@/custom-types';

type DarkModeContextDataT = {
  isDarkMode: boolean
  setDarkMode: () => void
  setLightMode: () => void
  selectedTheme: Object
};

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
