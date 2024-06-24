// src/pages/About/About.jsx
import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import HeroSection from '../../components/HeroSection/HeroSection';
import './About.scss';

const About = () => {
  const images = useContext(ImagesContext);

  return (
    <div className='about'>
      <HeroSection
        title='About Me'
        description="Hello! I'm Your Name, a passionate web developer with a love for creating beautiful and functional websites."
        image={images['logo.png']}
      />
    </div>
  );
};

export default About;
