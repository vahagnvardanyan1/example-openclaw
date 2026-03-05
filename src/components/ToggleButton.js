import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{
      backgroundColor: theme === 'dark' ? '#333' : '#FFF',
      color: theme === 'dark' ? '#FFF' : '#333',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleButton;
