// src/pages/Portfolio/Portfolio.jsx
import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import './Portfolio.scss';

const Portfolio = () => {
  const images = useContext(ImagesContext);

  return (
    <div className='portfolio'>
      <h1>My Portfolio</h1>
      <div className='portfolio-items'>
        <PortfolioItem
          title='Project Title 1'
          description='Project description goes here.'
          imageSrc={images['project1.png']}
        />
        <PortfolioItem
          title='Project Title 2'
          description='Project description goes here.'
          imageSrc={images['logo.png']}
        />
        {/* Add more PortfolioItem components as needed */}
      </div>
    </div>
  );
};

export default Portfolio;
