import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';

/**
 * General values of the application theme.
 * @property {Object} colors - All web application theme colors.
 * @property {string} fonts - Application theme fonts.
 * @property {Object} fontSizes - Different text sizes according to font type.
 */
const theme = {
  colors: {
    darkTeal: '#081f2c',
    lightGrey: '#ededed',
    darkGrey: '#666666',
    grey: '#939393',
    dark: '#212121',
    green: '#019592',
    white: '#ffffff',
    lightGreen: '#00b3a6',
    darkGreen: '#018986',
    red: '#d22020',
  },
  fonts: 'Roboto, sans-serif',
  fontSizes: {
    text: '0.8rem',
    subtitles: '1.1rem',
    titles: '2rem',
  },
};

/**
 * Provider to access the theme object from the entire application.
 * @param {Component} children - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
 * @return {ReactJSXElement} Theme.
 */
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
