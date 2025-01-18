import React from 'react';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Plant Paradise</h1>
      <p>Your one-stop shop for all your houseplant needs. Explore a wide range of beautiful plants to bring life to your home.</p>
      <button onClick={() => window.location.href = '/products'}>Get Started</button>
    </div>
  );
};

export default LandingPage;
