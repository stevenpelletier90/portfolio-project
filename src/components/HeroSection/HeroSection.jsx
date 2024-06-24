// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import './HeroSection.scss';

const HeroSection = ({ title, description, image }) => {
  const socialLinks = [
    { url: 'https://twitter.com', className: 'twitter', name: 'Twitter', icon: faTwitter },
    { url: 'https://facebook.com', className: 'facebook', name: 'Facebook', icon: faFacebookF },
    { url: 'https://linkedin.com', className: 'linkedin', name: 'LinkedIn', icon: faLinkedinIn },
    { url: 'https://instagram.com', className: 'instagram', name: 'Instagram', icon: faInstagram },
  ];

  return (
    <div className='hero-section animate__animated animate__fadeIn'>
      <div className='hero-content'>
        <div className='hero-info'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='social-media'>
            {socialLinks.map((link) => (
              <a href={link.url} className={link.className} key={link.className}>
                <FontAwesomeIcon icon={link.icon} /> {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className='hero-image'>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
