import React, { createContext, useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import defaultTheme from '../themes/defaultTheme';
import darkTheme from '../themes/darkTheme';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const appliedTheme = createMuiTheme(theme === 'light' ? defaultTheme : darkTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
