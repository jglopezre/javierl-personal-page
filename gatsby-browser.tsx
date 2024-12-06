/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import 'normalize.css';
import { ThemeWrapper } from '@/components/ThemeWrapper';

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => (
  <ThemeWrapper>
    {element}
  </ThemeWrapper>
);
