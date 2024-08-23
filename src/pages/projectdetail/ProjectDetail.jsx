import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import projects from '../../data/projects';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const pageAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Steve Pelletier's Portfolio`}</title>
        <meta name='description' content={project.description} />
        <meta name='keywords' content={project.technologies.join(', ')} />
        <link rel='canonical' href={`https://stevendpelletier.com/portfolio/${project.slug}`} />
        <meta property='og:title' content={`${project.title} | Steve Pelletier's Portfolio`} />
        <meta property='og:description' content={project.description} />
        <meta property='og:image' content={project.image} />
        <meta property='og:url' content={`https://stevendpelletier.com/portfolio/${project.slug}`} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={`${project.title} | Steve Pelletier's Portfolio`} />
        <meta name='twitter:description' content={project.description} />
        <meta name='twitter:image' content={project.image} />
      </Helmet>
      <motion.div className={styles.projectDetail} initial='initial' animate='animate' exit='exit' variants={pageAnimations}>
        <div className={styles.hero}>
          <div className={styles.container}>
            <Link to='/portfolio' className={styles.backLink}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Portfolio
            </Link>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.description}</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={project.image} alt={project.title} className={styles.projectImage} />
          <p className={styles.description}>{project.longDescription}</p>

          <h2>Technologies Used</h2>
          <ul className={styles.techList}>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <h2>Key Features</h2>
          <ul className={styles.featureList}>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {project.performanceMetrics && (
            <>
              <h2>Performance Metrics</h2>
              <ul className={styles.metricsList}>
                {project.performanceMetrics.map((metric, index) => (
                  <li key={index}>{metric}</li>
                ))}
              </ul>
            </>
          )}

          {project.businessImpact && (
            <>
              <h2>Business Impact</h2>
              <ul className={styles.impactList}>
                {project.businessImpact.map((impact, index) => (
                  <li key={index}>{impact}</li>
                ))}
              </ul>
            </>
          )}

          <div className={styles.projectLinks}>
            {project.link && (
              <a href={project.link} target='_blank' rel='noopener noreferrer' className={styles.button}>
                <FontAwesomeIcon icon={faExternalLinkAlt} /> View Live Project
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className={styles.button}>
                <FontAwesomeIcon icon={faGithub} /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
