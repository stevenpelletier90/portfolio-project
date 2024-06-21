import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './MobileMenu.scss';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='mobile-menu-container'>
      <button className='menu-toggle' onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size='2x' />
      </button>
      {menuOpen && (
        <div className='mobile-menu'>
          <nav className='mobile-nav-links'>
            <Link to='/about' onClick={toggleMenu}>
              About
            </Link>
            <Link to='/portfolio' onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to='/blog' onClick={toggleMenu}>
              Blog
            </Link>
            <Link to='/contact' onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
          <div className='mobile-social-media-icons'>
            <a
              href='https://github.com/stevenpelletier90'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
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
      )}
    </div>
  );
};

export default MobileMenu;
