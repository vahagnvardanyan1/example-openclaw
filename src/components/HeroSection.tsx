import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" aria-label="Main Hero">
      <div className="hero-content">
        <h1>Welcome to Our Service</h1>
        <p>Your satisfaction is our priority. Enjoy seamless experiences with us.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
