import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { ImagesContext } from '../../contexts/ImagesContext';
import './Header.scss';

const Header = () => {
  const images = useContext(ImagesContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = ({ onClick }) => (
    <>
      <Link to='/about' className='nav-link' onClick={onClick}>
        about
      </Link>
      <Link to='/portfolio' className='nav-link' onClick={onClick}>
        portfolio
      </Link>
      <Link to='/blog' className='nav-link' onClick={onClick}>
        blog
      </Link>
      <Link to='/contact' className='nav-link' onClick={onClick}>
        contact
      </Link>
    </>
  );

  const SocialIcons = () => (
    <div className='social-icons'>
      <a href='https://github.com/stevenpelletier90' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href='https://www.instagram.com/steverino__/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href='https://www.linkedin.com/in/stevendpelletier/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/'>
            <img src={images['logo.png']} alt='Logo of Steven Pelletier' className='logo-image' />
          </Link>
        </div>

        {isMobile ? (
          <div className='mobile-menu'>
            <button
              onClick={toggleMenu}
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              aria-expanded={isMenuOpen}
            >
              <span className='hamburger-icon'></span>
              <span className='sr-only'>Toggle menu</span>
            </button>
          </div>
        ) : (
          <div className='desktop-menu'>
            <nav className='nav-links'>
              <NavLinks />
            </nav>
            <SocialIcons />
          </div>
        )}
      </div>
      {isMobile && (
        <nav className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='dropdown-content'>
            <NavLinks onClick={() => setIsMenuOpen(false)} />
            <SocialIcons />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
