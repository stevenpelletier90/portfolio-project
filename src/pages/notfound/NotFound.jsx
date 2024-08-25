import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const titleText = '404';

  return (
    <>
      <Helmet>
        <title>Steve Pelletier &bull; 404 - Not Found</title>
        <meta name='description' content="The page you're looking for doesn't exist. Navigate back to Steve Pelletier's portfolio homepage." />
        <meta name='robots' content='noindex, follow' />
      </Helmet>
      <div className={styles.notFound}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            {titleText.split('').map((char, index) => (
              <span key={index} className={styles.animatedLetter} style={{animationDelay: `${index * 0.05}s`}}>
                {char}
              </span>
            ))}
          </h1>
        </div>
        <div className={styles.content}>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <div className={styles.buttonContainer}>
            <Link to='/' className={styles.homeLink}>
              Go back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
