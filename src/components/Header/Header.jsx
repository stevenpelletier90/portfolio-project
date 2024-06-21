// src/components/Header/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ImagesContext } from '../../contexts/ImagesContext';
import './Header.scss';

const Header = () => {
  const images = useContext(ImagesContext);

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='header'>
      <div className='container-fluid'>
        <Navbar.Brand as={Link} to='/'>
          <img src={images['logo.png']} alt='Logo' height='50' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto mb-2 mb-lg-0'>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/portfolio'>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to='/blog'>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
