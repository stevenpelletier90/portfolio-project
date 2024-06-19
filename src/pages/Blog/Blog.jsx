import React from 'react';
import './Blog.scss';

const Blog = () => {
  return (
    <div className='blog'>
      <h1>My Blog</h1>
      <div className='blog-posts'>
        {/* Add your blog posts here */}
        <div className='blog-post'>
          <h2>Blog Post Title</h2>
          <p>
            Blog post content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien
            eu fringilla dictum, nulla turpis consequat dolor, nec ullamcorper tortor nisi a lacus.
          </p>
        </div>
        <div className='blog-post'>
          <h2>Blog Post Title</h2>
          <p>
            Blog post content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien
            eu fringilla dictum, nulla turpis consequat dolor, nec ullamcorper tortor nisi a lacus.
          </p>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blog;
