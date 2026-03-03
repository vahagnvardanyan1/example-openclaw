import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" aria-label="Flan Website Footer">
      <p>&copy; {new Date().getFullYear()} Flan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;