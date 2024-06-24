import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost/BlogPost'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
