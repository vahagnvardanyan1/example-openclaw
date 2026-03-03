import React from 'react';

const Header: React.FC = () => {
  return (
    <header role="banner" aria-label="Flan Website Header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;