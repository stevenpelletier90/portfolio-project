import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const titleText = '404';

  const notFoundAnimations = {
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
        <title>Steve Pelletier &bull; 404 - Not Found</title>
        <meta
          name='description'
          content="The page you're looking for doesn't exist. Navigate back to Steve Pelletier's portfolio homepage."
        />
        <meta name='robots' content='noindex, follow' />
      </Helmet>
      <div className={styles.notFound}>
        <div className={styles.hero}>
          <motion.h1
            className={styles.title}
            variants={notFoundAnimations.containerVariants}
            initial='hidden'
            animate='visible'
          >
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={notFoundAnimations.letterVariants}
                custom={index}
                className={styles.animatedLetter}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link to='/' className={styles.homeLink}>
            Go back to Homepage
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
