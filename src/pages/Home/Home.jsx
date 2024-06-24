import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ImagesContext } from '../../contexts/ImagesContext';
import PortfolioItem from '../Portfolio/Portfolio';
import './Home.scss';

const Home = () => {
  const images = useContext(ImagesContext);

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className='home'>
      <div className='jumbotron'>
        <div className='jumbotron-overlay'></div>
        <div className='jumbotron-text'>
          <motion.h1 variants={nameVariants} initial='hidden' animate='visible'>
            {'Steven Pelletier'.split('').map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.5 }}>
            Designer/Developer
          </motion.p>
        </div>
      </div>

      <section className='about'>
        <h2>About Me</h2>
        <p>[Your brief introduction here. Highlight your skills, experience, and what you're passionate about.]</p>
      </section>

      <section className='latest-work'>
        <h2>Some of my Latest Work</h2>
        <div className='portfolio-grid'>
          <PortfolioItem
            image={images['project1.jpg']}
            title='Project 1'
            description='Brief description of Project 1'
            link='#'
          />
          <PortfolioItem
            image={images['project2.jpg']}
            title='Project 2'
            description='Brief description of Project 2'
            link='#'
          />
          {/* Add more PortfolioItem components as needed */}
        </div>
      </section>

      <section className='recent-blogs'>
        <h2>Recent Blog Posts</h2>
        {/* We'll add blog post previews here */}
      </section>
    </div>
  );
};

export default Home;
