import { darken, lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

export const BaseTheme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '20px',
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
