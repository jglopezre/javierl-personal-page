/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import 'normalize.css';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { DarkModeContextProvider } from '@/contexts/darkModeContext';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeWrapper>
    {element}
  </ThemeWrapper>
);

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <DarkModeContextProvider>
    {element}
  </DarkModeContextProvider>
);
