import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faPhp, faJs, faCss3Alt, faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';

const iconMap = {
  WordPress: faWordpress,
  PHP: faPhp,
  JavaScript: faJs,
  CSS3: faCss3Alt,
  HTML5: faHtml5,
  React: faReact,
  'Node.js': faNodeJs,
  MongoDB: faDatabase,
  Express: faCode,
  default: faCode,
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article className={styles.card} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
      <div className={styles.cardMedia} style={{ backgroundImage: `url(${project.image})` }} title={`Screenshot of ${project.title}`} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.projectTechnologies}>
          {project.technologies.slice(0, 5).map((tech, techIndex) => (
            <span key={techIndex} className={styles.techTag}>
              <FontAwesomeIcon icon={iconMap[tech] || iconMap.default} className={styles.techIcon} />
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && <span className={styles.techTag}>+{project.technologies.length - 5} more</span>}
        </div>
        <div className={styles.projectLinks}>
          <Link to={`/portfolio/${project.slug}`} className={`${styles.button} ${styles.primaryButton}`}>
            Learn More
          </Link>
          {project.link && (
            <a href={project.link} target='_blank' rel='noopener noreferrer' className={`${styles.button} ${styles.secondaryButton}`} aria-label={`View ${project.title} project`}>
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View Project
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
