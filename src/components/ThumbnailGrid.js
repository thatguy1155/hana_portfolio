// src/components/ThumbnailGrid.js
import React from 'react';
import '../ThumbnailGrid.css';
import Toolbar from '../toolbar'



const ThumbnailGrid = ({ items }) => {
  return (
    <div >
      <Toolbar />
      <div className="thumbnail-grid">
        {items.map((item, index) => (
        <a key={item.id} href={`/portfolio?project=${index}`} className="thumbnail-item">
          <img src={item.imageUrl} alt={item.title} className="thumbnail-image" />
          <div className="thumbnail-details">
            <h3 className="thumbnail-title">{item.title}</h3>
            <p className="thumbnail-subtitle">{item.subtitle}</p>
          </div>
        </a>
      ))}</div>
      
    </div>
  );
};

export default ThumbnailGrid;
