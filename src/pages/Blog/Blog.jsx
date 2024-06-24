import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllPosts } from '../../utils/blogUtils';
import './Blog.scss';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className='blog'>
      <Helmet>
        <title>Blog | Your Site Name</title>
        <meta name='description' content='Read our latest blog posts about web development, design, and technology.' />
        <link rel='canonical' href='https://yoursite.com/blog' />
      </Helmet>
      <h1>Blog</h1>
      <div className='blog-list'>
        {posts.map(({ id, title, date, excerpt }) => (
          <article key={id} className='blog-preview'>
            <h2>
              <Link to={`/blog/${id}`}>{title}</Link>
            </h2>
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
            <p>{excerpt}</p>
            <Link to={`/blog/${id}`} aria-label={`Read more about ${title}`}>
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
