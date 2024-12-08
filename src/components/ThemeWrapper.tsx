import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { useDarkModeContext } from '@/customHooks/useDarkModeContext';
import { darkTheme } from '@/styles/theme';
import { SimpleReactComponent } from '@/custom-types';

export const ThemeWrapper: React.FC<SimpleReactComponent> = ({ children }) => {
  const darkModeData = useDarkModeContext();
  const theme = darkModeData?.selectedTheme ?? darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
