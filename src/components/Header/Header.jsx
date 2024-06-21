import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ImagesContext } from '../../contexts/ImagesContext';
import './Header.scss';

const Header = () => {
  const images = useContext(ImagesContext);

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={images['logo.png']} alt='Logo of Steven Pelletier' className='custom-logo' />
          </Link>
        </div>
        <nav className='nav-links' aria-label='Main navigation'>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='social-media-icons'>
          <a href='https://github.com/stevenpelletier90' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
          <a
            href='https://www.instagram.com/steverino__/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a
            href='https://www.linkedin.com/in/stevendpelletier/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
