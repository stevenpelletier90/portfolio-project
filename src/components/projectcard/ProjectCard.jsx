import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardMedia} style={{ backgroundImage: `url(${project.image})` }} role='img' aria-label={`Screenshot of ${project.title}`} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.projectTechnologies} aria-label='Technologies used'>
          {project.technologies.slice(0, 5).map((tech, techIndex) => (
            <li key={techIndex} className={styles.techTag}>
              <FontAwesomeIcon icon={iconMap[tech] || iconMap.default} className={styles.techIcon} aria-hidden='true' />
              <span>{tech}</span>
            </li>
          ))}
          {project.technologies.length > 5 && (
            <li className={styles.techTag}>
              <span>+{project.technologies.length - 5} more</span>
            </li>
          )}
        </ul>
        <div className={styles.projectLinks}>
          <Link to={`/portfolio/${project.slug}`} className={`${styles.button} ${styles.primaryButton}`}>
            Learn More
          </Link>
          {project.link && (
            <a href={project.link} target='_blank' rel='noopener noreferrer' className={`${styles.button} ${styles.secondaryButton}`} aria-label={`View ${project.title} project (opens in a new tab)`}>
              <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden='true' /> View Project
            </a>
          )}
        </div>
      </div>
    </article>
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
};

export default ProjectCard;
