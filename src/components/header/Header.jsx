import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import LogoSVG from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const NavLinks = ({ onClick, isMobile }) => {
  const location = useLocation();
  const navRef = useRef(null);
  const [activeStyle, setActiveStyle] = useState({});

  const pages = ['home', 'about', 'portfolio', 'contact'];

  const updateActiveStyle = useCallback(() => {
    if (!isMobile && navRef.current) {
      const activeLink = navRef.current.querySelector(`.${styles.active}`);
      if (activeLink) {
        setActiveStyle({
          width: `${activeLink.offsetWidth}px`,
          left: `${activeLink.offsetLeft}px`,
          transition: 'all 0.3s ease',
        });
      }
    } else {
      setActiveStyle({}); // Reset style for mobile view
    }
  }, [isMobile]);

  useEffect(() => {
    updateActiveStyle();

    const debouncedHandleResize = debounce(updateActiveStyle, 100);
    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [location.pathname, isMobile, updateActiveStyle]);

  return (
    <nav className={styles.navLinks} ref={navRef} itemScope itemType='http://schema.org/SiteNavigationElement'>
      {pages.map((page) => {
        const path = page === 'home' ? '/' : `/${page}`;
        const isActive = location.pathname === path;
        return (
          <Link
            key={page}
            to={path}
            className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            onClick={() => {
              onClick();
              updateActiveStyle();
            }}
            itemProp='url'
          >
            <span itemProp='name' style={{ textTransform: 'capitalize' }}>
              {page}
            </span>
            {page === 'home' && <span className={styles.homeSlash}>/</span>}
          </Link>
        );
      })}
      {!isMobile && <div className={styles.activeBackground} style={activeStyle} />}
    </nav>
  );
};

NavLinks.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const SocialIcons = () => (
  <div className={styles.socialIcons}>
    {[
      {
        href: 'https://github.com/stevenpelletier90',
        icon: faGithub,
        label: 'GitHub',
      },
      {
        href: 'https://www.instagram.com/steverino__/',
        icon: faInstagram,
        label: 'Instagram',
      },
      {
        href: 'https://www.linkedin.com/in/stevendpelletier/',
        icon: faLinkedin,
        label: 'LinkedIn',
      },
    ].map(({ href, icon, label }) => (
      <a key={label} href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
        <FontAwesomeIcon icon={icon} />
      </a>
    ))}
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth <= 992;
    setIsMobile(newIsMobile);
    if (!newIsMobile) {
      setIsMenuOpen(false);
    }
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && toggleRef.current && !toggleRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleResize, handleClickOutside]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header} itemScope itemType='http://schema.org/WPHeader' data-header>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <Link to='/' className={styles.logoLink} itemProp='url'>
            <img src={LogoSVG} alt='Steven Pelletier' className={styles.logoImage} itemProp='logo' width='50' height='50' />
          </Link>
        </div>
        {isMobile && (
          <button ref={toggleRef} onClick={toggleMenu} className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} aria-expanded={isMenuOpen} aria-label='Toggle menu'>
            <span className={styles.hamburgerIcon}></span>
            <span className={styles.srOnly}>Toggle menu</span>
          </button>
        )}
        <div ref={menuRef} className={`${styles.menu} ${isMobile ? styles.mobileMenu : ''} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <NavLinks onClick={() => setIsMenuOpen(false)} isMobile={isMobile} />
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Header;
