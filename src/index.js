import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <header className="app-header">
        <h1>Welcome to Dark Mode App</h1>
        <button onClick={toggleDarkMode}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
