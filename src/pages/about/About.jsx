import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import styles from './About.module.css';
import gallery1 from '../../assets/images/mountain-image.jpg';
import gallery2 from '../../assets/images/image-roof.jpg';
import gallery3 from '../../assets/images/me-pool.jpg';
import gallery4 from '../../assets/images/springs-me.jpg';
import profileImage from '../../assets/images/profile-picture.jpg';
// Import new images for the additional row
import newImage1 from '../../assets/images/css.svg';
import newImage2 from '../../assets/images/html.svg';
import newImage3 from '../../assets/images/js.svg';
import newImage4 from '../../assets/images/react.svg';

const About = () => {
  const [weather, setWeather] = useState(null);
  const titleText = "I'm Steve.";
  const images = [gallery1, gallery2, gallery3, gallery4];
  // New array for additional images
  const newImages = [newImage1, newImage2, newImage3, newImage4];

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = '6b5eb5cdf94a499c9f041520240508';
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Orlando&aqi=no`);
      const data = await response.json();
      setWeather(data.current);
    };
    fetchWeather();

    Fancybox.bind('[data-fancybox]', {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const aboutAnimations = {
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
  };

  return (
    <>
      <Helmet>
        <title>Steve Pelletier &bull; About</title>
        <meta
          name='description'
          content='Steven Pelletier is a Senior Web Developer with over a decade of experience in front-end development, WordPress, and digital media. Specializing in React, CSS, and user-friendly web solutions.'
        />
        <meta name='keywords' content='Steven Pelletier, Senior Web Developer, Front-End Development, WordPress Expert, React, CSS, JavaScript, Digital Media, Mia Aesthetics, PatientNow' />
        <link rel='canonical' href='https://stevendpelletier.com/about' />
        <meta property='og:title' content='Steve Pelletier &bull; About' />
        <meta
          property='og:description'
          content='Learn about Steven Pelletier, a Senior Web Developer with expertise in front-end development, WordPress, and digital media. Over a decade of experience creating stunning, user-friendly websites.'
        />
        <meta property='og:url' content='https://stevendpelletier.com/about' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='About Steven Pelletier | Senior Web Developer | Front-End Expert' />
        <meta name='twitter:description' content="Discover Steve Pelletier's journey as a Senior Web Developer, specializing in front-end development, WordPress, and digital media solutions." />
      </Helmet>
      <div className={styles.about}>
        <div className={styles.hero}>
          <motion.h1 className={styles.title} variants={aboutAnimations.containerVariants} initial='hidden' animate='visible'>
            {titleText.split('').map((char, index) => (
              <motion.span key={index} variants={aboutAnimations.letterVariants} custom={index} className={styles.animatedLetter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div className={styles.content} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <div className={styles.introSection}>
            <div className={styles.profileImageContainer}>
              <img src={profileImage} alt='Steve Pelletier' className={styles.profileImage} />
            </div>
            <div className={styles.introText}>
              <h2>I&apos;m a Front-End Web Developer working remotely from {weather && <span className={styles.weather}>{Math.round(weather.temp_f)}°F Orlando, FL</span>}</h2>
              <p>
                A web developer with over a decade of experience in digital media and front-end development. My focus is on creating efficient, user-friendly websites that make a real difference for
                businesses and their customers.
              </p>
              <p>
                With a background in Digital Media from the University of Central Florida, I&apos;ve developed expertise in HTML, CSS, JavaScript, WordPress, and React. These days, I specialize in
                React development, building dynamic, responsive, and beautiful websites with a focus on SEO optimization and speed.
              </p>
            </div>
          </div>
          <div className={styles.gallerySection}>
            {images.map((image, index) => (
              <a key={index} data-fancybox='gallery' href={image} className={styles.galleryItem}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </a>
            ))}
          </div>
          {/* New row of images */}
          <div className={styles.skillsSection}>
            {newImages.map((image, index) => (
              <div key={index} className={styles.skillItem}>
                <img src={image} alt={`Skill image ${index + 1}`} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
