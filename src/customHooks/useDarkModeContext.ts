import { useContext } from 'react';
import { darkModeContext } from '@/contexts/darkModeContext';

export const useDarkModeContext = () => {
  const context = useContext(darkModeContext);

  if (!context) throw new Error('DarkModeContext component must be wrapped by a DarkModeContextProvider component');

  return context;
};
