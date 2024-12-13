import React from 'react';
import { DefaultTheme } from 'styled-components';

export type SimpleReactComponent = {
  children: React.ReactNode
};

export type SEOComponentProps = {
  children?: React.ReactNode
  title?: string,
  description?: string,
  pathname?: string,
  keywords?: string[],
};

type DarkModeContextDataT = {
  isDarkMode: boolean
  setDarkMode: () => void
  setLightMode: () => void
  selectedTheme: DefaultTheme
};
