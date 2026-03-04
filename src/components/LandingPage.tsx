import React from 'react';
import AuthenticationButton from './AuthenticationButton';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';

const LandingPage: React.FC = () => {
  return (
    <main aria-label="Landing page">
      <HeroSection />
      <FeaturesSection />
      <AuthenticationButton />
    </main>
  );
};

export default LandingPage;