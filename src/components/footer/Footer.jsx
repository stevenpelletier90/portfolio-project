import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} data-footer>
      <div className={styles.footerContainer}>
        <div className={styles.copyrightWrapper}>
          <span className={styles.copyright}>&copy; 2024 Steven Pelletier</span>
        </div>
        <nav className={styles.menu}>
          <div className={styles.navLinks}>
            <Link to='/' className={styles.navLink}>
              Home
            </Link>
            <Link to='/about' className={styles.navLink}>
              About
            </Link>
            <Link to='/portfolio' className={styles.navLink}>
              Portfolio
            </Link>
            <Link to='/contact' className={styles.navLink}>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
