import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faPhp, faJs, faCss3Alt, faHtml5, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faExternalLinkAlt, faCalendarAlt, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import projects from '../../data/projects';
import styles from './ProjectCard.module.css';

const iconMap = {
  WordPress: faWordpress,
  PHP: faPhp,
  JavaScript: faJs,
  CSS3: faCss3Alt,
  HTML5: faHtml5,
  'REST API': faDatabase,
  React: faReact,
  MySQL: faDatabase,
  default: faCode,
};

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <motion.article key={project.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
          <section className={styles.card} aria-labelledby={`project-title-${project.id}`}>
            <div className={styles.cardMedia} style={{ backgroundImage: `url(${project.image})` }} title={`Screenshot of ${project.title}`} />
            <div className={styles.cardContent}>
              <h2 id={`project-title-${project.id}`} className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.projectMetadata}>
                <span className={styles.metadataItem}>
                  <FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true" className={styles.metadataIcon} /> {project.dateCompleted}
                </span>
                <span className={styles.metadataItem}>
                  <FontAwesomeIcon icon={faUsers} aria-hidden="true" className={styles.metadataIcon} /> Team of {project.teamSize}
                </span>
                <span className={styles.metadataItem}>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" className={styles.metadataIcon} /> {project.duration}
                </span>
              </div>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    <FontAwesomeIcon icon={iconMap[tech] || iconMap.default} className={styles.techIcon} />
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectHighlights}>
                <h3>Technical Highlights:</h3>
                <ul>
                  {project.technicalHighlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.projectImpact}>
                <h3>Business Impact:</h3>
                <ul>
                  {project.businessImpact.map((impact, impactIndex) => (
                    <li key={impactIndex}>{impact}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.projectLinks}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.primaryButton}`}
                  aria-label={`View ${project.title} project`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> View Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.secondaryButton}`}
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub Repo
                </a>
              </div>
            </div>
          </section>
        </motion.article>
      ))}
    </>
  );
};

export default ProjectCard;
