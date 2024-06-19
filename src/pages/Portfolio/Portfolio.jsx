import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>My Portfolio</h1>
      <div className='portfolio-items'>
        {/* Add your portfolio items here */}
        <div className='portfolio-item'>
          <h2>Project Title</h2>
          <p>Project description goes here.</p>
        </div>
        <div className='portfolio-item'>
          <h2>Project Title</h2>
          <p>Project description goes here.</p>
        </div>
        {/* Add more portfolio items as needed */}
      </div>
    </div>
  );
};

export default Portfolio;
