import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const titleText = 'My Portfolio';
  const subtitleText = 'Showcasing My Web Development Projects';

  const portfolioAnimations = {
    letterVariants: {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.5,
          type: 'spring',
          damping: 10,
          stiffness: 100,
        },
      }),
    },
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.3,
        },
      },
    },
    subtitleVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 0.8 },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Steve Pelletier &bull; My Work</title>
        <meta
          name='description'
          content="Explore Steve Pelletier's portfolio of web development projects, showcasing expertise in front-end development, WordPress, and user-friendly web applications for the aesthetic industry."
        />
        <meta
          name='keywords'
          content='Steve Pelletier, portfolio, web development, front-end, WordPress, React, JavaScript, CSS, Mia Aesthetics, PatientNow, responsive design'
        />
        <link rel='canonical' href='https://stevendpelletier.com/portfolio' />
        <meta property='og:title' content="Steve Pelletier's Portfolio | Front-End & WordPress Developer Projects" />
        <meta
          property='og:description'
          content="Discover Steve Pelletier's web development projects, featuring responsive designs, WordPress solutions, and innovative front-end applications."
        />
        <meta property='og:url' content='https://stevendpelletier.com/portfolio' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Steve Pelletier's Portfolio | Front-End & WordPress Developer Projects" />
        <meta
          name='twitter:description'
          content="Explore Steve Pelletier's showcase of web development projects, demonstrating expertise in front-end, WordPress, and user-centric design."
        />
      </Helmet>
      <div className={styles.portfolio}>
        <div className={styles.hero}>
          <motion.h1
            className={styles.title}
            variants={portfolioAnimations.containerVariants}
            initial='hidden'
            animate='visible'
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={portfolioAnimations.letterVariants}
                custom={index}
                className={styles.animatedLetter}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            variants={portfolioAnimations.subtitleVariants}
            initial='hidden'
            animate='visible'
          >
            {subtitleText}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
