import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Features from '../components/Features';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
