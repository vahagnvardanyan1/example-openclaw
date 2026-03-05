import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const lightTheme = {
  body: '#FFFFFF',
  text: '#000000'
};

const darkTheme = {
  body: '#000000',
  text: '#FFFFFF'
};

function ToggleButton({ toggleTheme }) {
  return (
    <button onClick={toggleTheme} style={{ margin: '20px', padding: '10px' }}>
      Toggle Theme
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div>
        <h1>Hello, World!</h1>
        <ToggleButton toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
