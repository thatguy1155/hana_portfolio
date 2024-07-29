import React, { useState } from 'react';
import '../FloatingMenu.css';

const FloatingMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="menu-button">☰</button>
      {isVisible && (
        <div className="floating-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/thumbnails">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;