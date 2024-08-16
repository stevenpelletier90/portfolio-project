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
        <motion.article key={project.id} className={styles.projectCard} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
          <div className={styles.projectImageContainer}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </div>
          <div className={styles.projectInfo}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectMetadata}>
              <span className={styles.metadataItem}>
                <FontAwesomeIcon icon={faCalendarAlt} className={styles.metadataIcon} />
                {project.dateCompleted}
              </span>
              <span className={styles.metadataItem}>
                <FontAwesomeIcon icon={faUsers} className={styles.metadataIcon} />
                Team of {project.teamSize}
              </span>
              <span className={styles.metadataItem}>
                <FontAwesomeIcon icon={faClock} className={styles.metadataIcon} />
                {project.duration}
              </span>
            </div>
            <div className={styles.projectTechnologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  <FontAwesomeIcon icon={iconMap[tech] || iconMap.default} className={styles.techIcon} />
                  <span className={styles.techText}>{tech}</span>
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
              <a href={project.link} target='_blank' rel='noopener noreferrer' className={styles.projectLink}>
                View Project
                <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.linkIcon} />
              </a>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className={styles.projectLink}>
                GitHub Repo
                <FontAwesomeIcon icon={faGithub} className={styles.linkIcon} />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </>
  );
};

export default ProjectCard;
