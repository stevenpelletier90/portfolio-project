import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='profile'>
          <img src='poo.jpg' alt='Profile' />
        </div>
        <div className='content'>
          <h1>About Me</h1>
          <p>
            Hello! I'm Your Name, a passionate web developer with a love for creating beautiful and functional websites.
          </p>
          <p>
            I've been working in the web development industry for several years and have a strong background in both
            front-end and back-end development.
          </p>
          <p>
            Feel free to browse through my portfolio and contact me if you have any questions or if you’d like to work
            together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
