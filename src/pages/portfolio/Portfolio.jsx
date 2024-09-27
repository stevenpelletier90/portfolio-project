import { Helmet } from 'react-helmet-async';
import styles from './Portfolio.module.css';
import ProjectCard from '../../components/projectcard/ProjectCard';
import projects from '../../data/projects';

const Portfolio = () => {
  const titleText = 'My Work.';
  const subtitleText = 'Showcasing My Web Development Projects';

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
        <div className={styles.content}>
          <div className={styles.hero}>
            <h1 className={styles.title}>{titleText}</h1>
            <p className={styles.subtitle}>{subtitleText}</p>
          </div>
          <div className={styles.projectListContainer}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
