import React from 'react';
import './styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Timbu Cloud Shop</h1>
      <p>Explore our range of products and shop with confidence!</p>
      <a href="/shop" className="btn-primary">Shop Now</a>
    </div>
  );
};

export default LandingPage;
