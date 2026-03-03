import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h2 id="hero-heading">Leading the Way in Web Design</h2>
      <p>Discover our services today and transform your online presence.</p>
      <button className="cta-button" aria-label="Learn More">Learn More</button>
    </section>
  );
};

export default HeroSection;