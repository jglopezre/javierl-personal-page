import { darken, lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

export const BaseTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      lg: '1.4rem',
      xl: '2rem',
      xxl: '2.8rem',
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: lighten(0.15, '#ff5153'),
    secondary: '#ffb925',
    background: darken(0.2, '#5c5d50'),
    text: '#fffedc',
  },
  ...BaseTheme,
};

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#ff5153',
    secondary: '#ffb925',
    background: '#fffedc',
    text: '#5c5d50',
  },
  ...BaseTheme,
};
