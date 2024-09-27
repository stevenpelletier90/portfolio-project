import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import resumePDF from "../../assets/docs/steven-pelletier-resume.pdf";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Steve Pelletier • Front-End Developer | WordPress Expert | Designer</title>
        <meta
          name="description"
          content="Steven Pelletier is a skilled front-end developer with expertise in React, JavaScript, HTML, and CSS. Also proficient in WordPress development and web design."
        />
        <meta
          name="keywords"
          content="Steven Pelletier, Steven D Pelletier, Steve Pelletier, front-end developer, React developer, JavaScript developer, WordPress expert, web designer, remote work"
        />
        <link rel="canonical" href="https://stevendpelletier.com" />
        <meta property="og:title" content="Steven Pelletier • Front-End Developer | WordPress Expert | Designer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Steven Pelletier, a front-end developer specializing in React, JavaScript, and modern web technologies. Experienced in WordPress and web design."
        />
        <meta property="og:url" content="https://stevendpelletier.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steven Pelletier • Front-End Developer | WordPress Expert | Designer" />
        <meta
          name="twitter:description"
          content="Discover the work of Steven Pelletier, a front-end developer skilled in React, JavaScript, and modern web technologies. Also proficient in WordPress and web design."
        />
      </Helmet>
      <div className={styles.home}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Hi. I&apos;m Steve.</h1>
          <p className={styles.subtitle}>Front-end Developer / WordPress Expert / Designer</p>
          <div className={styles.buttonContainer}>
            <a href="/portfolio" className={`${styles.button} ${styles.workButton}`}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.buttonIcon} /> My Work
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.resumeButton}`}>
              <FontAwesomeIcon icon={faFileAlt} className={styles.buttonIcon} /> My Resume
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
