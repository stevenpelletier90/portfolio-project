import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer bg-dark text-white py-4'>
      <Container>
        <Row className='align-items-center'>
          <Col md={4} className='text-center text-md-start mb-3 mb-md-0'>
            <h5>My Portfolio</h5>
            <p className='mb-0'>Bringing ideas to life through code</p>
          </Col>
          <Col md={4} className='text-center mb-3 mb-md-0'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#home' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='text-white'>
                  About
                </a>
              </li>
              <li>
                <a href='#projects' className='text-white'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' className='text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className='text-center text-md-end'>
            <h5>Connect With Me</h5>
            <div className='social-icons'>
              <a
                href='https://github.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white me-3'
              >
                <FontAwesomeIcon icon={faGithub} size='lg' />
              </a>
              <a
                href='https://linkedin.com/in/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white me-3'
              >
                <FontAwesomeIcon icon={faLinkedin} size='lg' />
              </a>
              <a
                href='https://twitter.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white me-3'
              >
                <FontAwesomeIcon icon={faTwitter} size='lg' />
              </a>
              <a href='mailto:your.email@example.com' className='text-white'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
              </a>
            </div>
          </Col>
        </Row>
        <hr className='my-4' />
        <Row>
          <Col className='text-center'>
            <p className='mb-0'>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
