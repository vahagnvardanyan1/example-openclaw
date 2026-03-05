import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a ThemeContext with default value 'light'
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// ThemeProvider component to wrap around the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Effect to apply the theme to the body class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
