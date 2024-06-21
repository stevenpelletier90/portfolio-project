import React, { useContext } from 'react';
import { ImagesContext } from '../../contexts/ImagesContext';
import './Home.scss';

const Home = () => {
  const images = useContext(ImagesContext);

  return (
    <div className='home'>
      <div className='jumbotron'>
        <div className='jumbotron-overlay'></div>
        <div className='jumbotron-text'>
          <h1>Steven Pelletier</h1>
          <p>Designer/Developer</p>
        </div>
      </div>
      <div className='latest-work'>
        <h2>Some of my Latest Work</h2>
        {/* Add your latest work items here */}
      </div>
    </div>
  );
};

export default Home;
