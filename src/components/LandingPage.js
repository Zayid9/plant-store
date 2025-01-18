import React from 'react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing">
    <h1>Plant Paradise</h1>
    <p>Your one-stop shop for houseplants. Beautiful, fresh, and delivered to your doorstep.</p>
    <button onClick={() => window.location.href = '/products'}>Get Started</button>
  </div>
);

export default LandingPage;