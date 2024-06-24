import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioItem.scss';

const PortfolioItem = ({ title, description, imageSrc, altText, link }) => {
  return (
    <article className='portfolio-item'>
      {imageSrc && <img src={imageSrc} alt={altText || title} className='portfolio-item-image' loading='lazy' />}
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} className='portfolio-item-link' target='_blank' rel='noopener noreferrer'>
          View Project
        </a>
      )}
    </article>
  );
};

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  link: PropTypes.string,
};

export default PortfolioItem;
