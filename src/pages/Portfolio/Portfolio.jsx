// src/pages/Portfolio/Portfolio.jsx
import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import HeroSection from '../../components/HeroSection/HeroSection';
import './Portfolio.scss';

const Portfolio = () => {
  const images = useContext(ImagesContext);

  return (
    <div className='portfolio'>
      <HeroSection
        title='My Portfolio'
        description='Welcome to my portfolio. Here you can find a selection of my recent projects and work.'
        image={images['portfolio-banner.png']} // Replace with the appropriate image key
      />
      <div className='portfolio-content'>{/* Add your portfolio content here */}</div>
    </div>
  );
};

export default Portfolio;
