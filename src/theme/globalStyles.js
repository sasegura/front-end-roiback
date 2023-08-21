import { createGlobalStyle } from 'styled-components';

//Global styles of the App
const GlobalStyles = createGlobalStyle`  
  body {
    background-color: white;
    font-family: ${({ theme }) => theme.fonts};
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.dark};
  }
  body, h1, h2, h3, p, ul, ol, li {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.titles};
    font-weight: normal;
  }
  h2{
    font-size: ${({ theme }) => theme.fontSizes.subtitles};
  }
`;

export default GlobalStyles;
