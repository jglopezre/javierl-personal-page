import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Outfit, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Parkinsans;
  }
`;

export default GlobalStyles;
