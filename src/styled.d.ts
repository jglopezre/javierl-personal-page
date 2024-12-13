import 'styled-components';
import type { CSSProp } from 'styled-components';
import { darkTheme } from './styles/theme';

type ThemeType = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontSize: {
        sm: string;
        md: string;
        lg: string;
      };
      fontWeight: {
        regular: number;
        bold: number;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
