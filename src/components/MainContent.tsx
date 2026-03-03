import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main role="main" aria-labelledby="main-heading">
      <h1 id="main-heading">Welcome to Flan</h1>
      <section id="features" aria-label="Features">
        <h2>Features</h2>
        <p>Discover the amazing features of Flan.</p>
      </section>
      <section id="pricing" aria-label="Pricing">
        <h2>Pricing</h2>
        <p>Choose the plan that suits you best.</p>
      </section>
      <section id="contact" aria-label="Contact">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you!</p>
      </section>
    </main>
  );
};

export default MainContent;