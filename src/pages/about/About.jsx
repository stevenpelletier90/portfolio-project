import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import gallery1 from '../../assets/images/mountain-image.jpg';
import gallery2 from '../../assets/images/image-roof.jpg';
import gallery3 from '../../assets/images/me-pool.jpg';
import gallery4 from '../../assets/images/springs-me.jpg';
import profileImage from '../../assets/images/profile-picture.jpg';

const SkillBar = ({ skill, level }) => (
  <div className={styles.skillBar}>
    <div className={styles.skillInfo}>
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className={styles.skillProgress}>
      <div className={styles.skillFill} style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

const About = () => {
  const [weather, setWeather] = useState(null);
  const titleText = "I'm Steve.";
  const images = [gallery1, gallery2, gallery3, gallery4];
  const skills = [
    { name: 'HTML', icon: faHtml5, level: 100 },
    { name: 'CSS', icon: faCss3Alt, level: 100 },
    { name: 'JavaScript', icon: faJs, level: 100 },
    { name: 'React', icon: faReact, level: 100 },
    { name: 'WordPress', icon: faWordpress, level: 100 },
    { name: 'Adobe Photoshop', icon: faPhotoFilm, level: 90 },
    { name: 'Adobe Illustrator', icon: faPhotoFilm, level: 85 },
  ];

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
          <div className={styles.skillsContainer}>
            <div className={styles.skillsInfo}>
              <h3>My Skills</h3>
              <p>
                Throughout my career, I have honed a diverse set of skills that enable me to deliver comprehensive web solutions. From front-end technologies like HTML, CSS, and JavaScript to content
                management systems like WordPress, I bring a well-rounded skill set to every project. My proficiency in design tools such as Adobe Photoshop and Illustrator complements my development
                skills, allowing me to bridge the gap between design and implementation seamlessly.
              </p>
            </div>
            <div className={styles.skillsSection}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <FontAwesomeIcon icon={skill.icon} className={styles.skillIcon} />
                  <SkillBar skill={skill.name} level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
