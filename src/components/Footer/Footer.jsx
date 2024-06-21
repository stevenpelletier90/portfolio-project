import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>&copy; {new Date().getFullYear()} Steven Pelletier</div>
        <nav className='footer-nav'>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
