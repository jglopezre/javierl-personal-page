import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 18px;
  }

  body {
    font-family: Outfit, Arial, sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color, 0.3s;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
    font-weight: 700;
  }

  p, span {
    font-family: Outfit, Arial, sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyles;
