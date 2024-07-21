// src/components/HomePage.js
import React from 'react';
import Toolbar from '../toolbar'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <Toolbar />
      <h1>Welcome to My Portfolio</h1>
      <p>Check out my projects below.</p>
    </div>
  );
};

export default HomePage;