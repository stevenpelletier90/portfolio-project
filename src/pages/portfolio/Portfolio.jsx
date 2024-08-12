import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const OrbBackground = () => (
  <svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <radialGradient id='notFoundGradient1' cx='50%' cy='50%' fx='0.441602%' fy='50%' r='.5'>
        <animate attributeName='fx' dur='34s' values='0%;3%;0%' repeatCount='indefinite' />
        <stop offset='0%' stopColor='rgba(0, 119, 182, 0.9)' /> {/* Ocean Blue, increased opacity */}
        <stop offset='100%' stopColor='rgba(0, 119, 182, 0)' />
      </radialGradient>
      <radialGradient id='notFoundGradient2' cx='50%' cy='50%' fx='2.68147%' fy='50%' r='.5'>
        <animate attributeName='fx' dur='23.5s' values='0%;3%;0%' repeatCount='indefinite' />
        <stop offset='0%' stopColor='rgba(0, 180, 216, 0.9)' /> {/* Brighter Light Blue, increased opacity */}
        <stop offset='100%' stopColor='rgba(0, 180, 216, 0)' />
      </radialGradient>
      <radialGradient id='notFoundGradient3' cx='50%' cy='50%' fx='0.836536%' fy='50%' r='.5'>
        <animate attributeName='fx' dur='21.5s' values='0%;3%;0%' repeatCount='indefinite' />
        <stop offset='0%' stopColor='rgba(64, 224, 208, 0.9)' /> {/* Teal, increased opacity */}
        <stop offset='100%' stopColor='rgba(64, 224, 208, 0)' />
      </radialGradient>
    </defs>
    <rect x='0' y='0' width='100%' height='100%' fill='url(#notFoundGradient1)'>
      <animate attributeName='x' dur='20s' values='25%;0%;25%' repeatCount='indefinite' />
      <animate attributeName='y' dur='21s' values='0%;25%;0%' repeatCount='indefinite' />
      <animateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='17s' repeatCount='indefinite' />
    </rect>
    <rect x='0' y='0' width='100%' height='100%' fill='url(#notFoundGradient2)'>
      <animate attributeName='x' dur='23s' values='-25%;0%;-25%' repeatCount='indefinite' />
      <animate attributeName='y' dur='24s' values='0%;50%;0%' repeatCount='indefinite' />
      <animateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='18s' repeatCount='indefinite' />
    </rect>
    <rect x='0' y='0' width='100%' height='100%' fill='url(#notFoundGradient3)'>
      <animate attributeName='x' dur='25s' values='0%;25%;0%' repeatCount='indefinite' />
      <animate attributeName='y' dur='26s' values='0%;25%;0%' repeatCount='indefinite' />
      <animateTransform attributeName='transform' type='rotate' from='360 50 50' to='0 50 50' dur='19s' repeatCount='indefinite' />
    </rect>
  </svg>
);

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
        <meta name='keywords' content='Steve Pelletier, portfolio, web development, front-end, WordPress, React, JavaScript, CSS, Mia Aesthetics, PatientNow, responsive design' />
        <link rel='canonical' href='https://stevendpelletier.com/portfolio' />
        <meta property='og:title' content="Steve Pelletier's Portfolio | Front-End & WordPress Developer Projects" />
        <meta property='og:description' content="Discover Steve Pelletier's web development projects, featuring responsive designs, WordPress solutions, and innovative front-end applications." />
        <meta property='og:url' content='https://stevendpelletier.com/portfolio' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Steve Pelletier's Portfolio | Front-End & WordPress Developer Projects" />
        <meta name='twitter:description' content="Explore Steve Pelletier's showcase of web development projects, demonstrating expertise in front-end, WordPress, and user-centric design." />
      </Helmet>
      <div className={styles.portfolio}>
        <div className={styles.backgroundWrapper}>
          <OrbBackground />
          <div className={styles.gradientOverlay}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.hero}>
            <motion.h1 className={styles.title} variants={portfolioAnimations.containerVariants} initial='hidden' animate='visible'>
              {titleText.split('').map((char, index) => (
                <motion.span key={index} variants={portfolioAnimations.letterVariants} custom={index} className={styles.animatedLetter}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className={styles.subtitle} variants={portfolioAnimations.subtitleVariants} initial='hidden' animate='visible'>
              {subtitleText}
            </motion.p>
          </div>
          {/* Add your portfolio content here */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
