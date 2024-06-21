import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ImagesContext } from '../../contexts/ImagesContext';
import './Header.scss';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: '#ffffff',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    right: '20px',
    top: '20px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0,
  },
};

const Header = () => {
  const images = useContext(ImagesContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderNavLinks = () => (
    <>
      <Link to='/about' onClick={closeMenu} className='menu-item'>
        About
      </Link>
      <Link to='/portfolio' onClick={closeMenu} className='menu-item'>
        Portfolio
      </Link>
      <Link to='/blog' onClick={closeMenu} className='menu-item'>
        Blog
      </Link>
      <Link to='/contact' onClick={closeMenu} className='menu-item'>
        Contact
      </Link>
    </>
  );

  const renderSocialIcons = () => (
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
            <img src={images['logo.png']} alt='Logo of Steven Pelletier' className='custom-logo' />
          </Link>
        </div>
        {!isMobile && (
          <>
            <nav className='nav-links' aria-label='Main navigation'>
              {renderNavLinks()}
            </nav>
            <div className='social-media-icons'>{renderSocialIcons()}</div>
          </>
        )}
        {isMobile && (
          <Menu right isOpen={menuOpen} onStateChange={handleStateChange} styles={styles}>
            <div className='menu-content'>
              <nav className='mobile-nav-links'>{renderNavLinks()}</nav>
              {renderSocialIcons()}
            </div>
          </Menu>
        )}
      </div>
    </header>
  );
};

export default Header;
