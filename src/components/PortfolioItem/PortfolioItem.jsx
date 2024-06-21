// src/components/PortfolioItem/PortfolioItem.jsx
import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({ title, description, imageSrc }) => {
  return (
    <div className='portfolio-item'>
      {imageSrc && <img src={imageSrc} alt={title} className='portfolio-item-image' />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioItem;
