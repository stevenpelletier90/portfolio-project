import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Home.scss';

const Home = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current.querySelector('h1'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className='home'>
      <div className='content' ref={containerRef}>
        <h1>Your Name</h1>
        <p>Welcome to My Portfolio</p>
      </div>
    </div>
  );
};

export default Home;
