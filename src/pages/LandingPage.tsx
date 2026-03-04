import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <HeroSection />
            <FeaturesSection />
            <ContactForm />
        </div>
    );
};

export default LandingPage;
