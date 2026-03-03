import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <p>&copy; 2026 Our Company. All rights reserved.</p>
      <nav aria-label="Footer Navigation">
        <ul className="footer-nav-list">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;