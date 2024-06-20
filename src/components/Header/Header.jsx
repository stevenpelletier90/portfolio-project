import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <div className='logo'>
          <Link to='/'>
            <img src='/path/to/your/logo.png' alt='Logo' />
          </Link>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='social-media'>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
