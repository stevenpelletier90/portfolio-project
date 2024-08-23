import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => {
  const titleText = "Hi. I'm Steve.";

  const homeAnimations = {
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

    buttonVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 2, duration: 0.8 },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Steve Pelletier • Front-End Developer | WordPress Expert | Designer
        </title>
        <meta
          name='description'
          content='Steven Pelletier is a skilled front-end developer with expertise in React, JavaScript, HTML, and CSS. Also proficient in WordPress development and web design.'
        />
        <meta
          name='keywords'
          content='Steven Pelletier, Steven D Pelletier, Steve Pelletier, front-end developer, React developer, JavaScript developer, WordPress expert, web designer, remote work'
        />
        <link rel='canonical' href='https://stevendpelletier.com' />
        <meta
          property='og:title'
          content='Steven Pelletier • Front-End Developer | WordPress Expert | Designer'
        />
        <meta
          property='og:description'
          content='Explore the portfolio of Steven Pelletier, a front-end developer specializing in React, JavaScript, and modern web technologies. Experienced in WordPress and web design.'
        />
        <meta property='og:url' content='https://stevendpelletier.com' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Steven Pelletier • Front-End Developer | WordPress Expert | Designer'
        />
        <meta
          name='twitter:description'
          content='Discover the work of Steven Pelletier, a front-end developer skilled in React, JavaScript, and modern web technologies. Also proficient in WordPress and web design.'
        />
      </Helmet>
      <div className={styles.home}>
        <section className={styles.hero}>
          <motion.h1
            className={styles.title}
            variants={homeAnimations.containerVariants}
            initial='hidden'
            animate='visible'
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={homeAnimations.letterVariants}
                custom={index}
                className={styles.animatedLetter}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            variants={homeAnimations.subtitleVariants}
            initial='hidden'
            animate='visible'
          >
            Front-end Developer / WordPress Expert / Designer
          </motion.p>
          <motion.div
            className={styles.buttonContainer}
            variants={homeAnimations.buttonVariants}
            initial='hidden'
            animate='visible'
          >
            <a href="/portfolio" className={`${styles.button} ${styles.workButton}`}>
              My Work
            </a>
            <a href="/assets/docs/steven-pelletier-resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.resumeButton}`}>
              My Resume
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
