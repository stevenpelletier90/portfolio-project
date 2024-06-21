// src/contexts/ImagesContext.js
import React, { createContext } from 'react';
import images from '../assets/images/images';

const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  return <ImagesContext.Provider value={images}>{children}</ImagesContext.Provider>;
};

export { ImagesProvider, ImagesContext };
