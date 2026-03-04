import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="content">
        <h2>Welcome to the World of Web</h2>
        <p>Explore the amazing world of web development and design.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;