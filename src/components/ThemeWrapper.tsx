import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { useDarkMode } from '@/customHooks/useDarkTheme';
import { SimpleReactComponent } from '@/custom-types';

export const ThemeWrapper: React.FC<SimpleReactComponent> = ({ children }) => {
  const { selectedTheme } = useDarkMode();

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
