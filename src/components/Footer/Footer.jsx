import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='footer'>
      <button className='back-to-top' onClick={scrollToTop} aria-label='Back to top'>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-copyright'>&copy; {new Date().getFullYear()} Steven Pelletier</div>
          <nav className='footer-nav'>
            <Link to='/about'>about</Link>
            <Link to='/book'>book</Link>
            <Link to='/portfolio'>portfolio</Link>
            <Link to='/blog'>blog</Link>
            <Link to='/contact'>contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
