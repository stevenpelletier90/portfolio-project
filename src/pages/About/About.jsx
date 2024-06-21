// src/pages/About/About.jsx
import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import './About.scss';

const About = () => {
  const images = useContext(ImagesContext);

  return (
    <div className='about'>
      <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <img
              src={images['logo.png']}
              className='d-block mx-lg-auto img-fluid'
              alt='Profile'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold lh-1 mb-3'>About Me</h1>
            <p className='lead'>
              Hello! I'm Your Name, a passionate web developer with a love for creating beautiful and functional
              websites.
            </p>
            <p className='lead'>
              I've been working in the web development industry for several years and have a strong background in both
              front-end and back-end development.
            </p>
            <p className='lead'>
              Feel free to browse through my portfolio and contact me if you have any questions or if you’d like to work
              together.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>
                Primary
              </button>
              <button type='button' className='btn btn-outline-secondary btn-lg px-4'>
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
