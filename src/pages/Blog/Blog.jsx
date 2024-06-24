import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Blog.scss';

// Temporary mock data
const mockPosts = [
  { id: 1, title: 'First Blog Post', date: '2023-01-01', excerpt: 'This is the first blog post.' },
  { id: 2, title: 'Second Blog Post', date: '2023-02-01', excerpt: 'This is the second blog post.' },
  { id: 3, title: 'Third Blog Post', date: '2023-03-01', excerpt: 'This is the third blog post.' },
];

const Blog = () => {
  const posts = mockPosts; // Replace with getAllPosts() when defined

  return (
    <div className='blog'>
      <Helmet>
        <title>Blog | Your Site Name</title>
        <meta name='description' content='Read our latest blog posts about web development, design, and technology.' />
        <link rel='canonical' href='https://yoursite.com/blog' />
        {/* Open Graph Meta Tags */}
        <meta property='og:title' content='Blog | Your Site Name' />
        <meta
          property='og:description'
          content='Read our latest blog posts about web development, design, and technology.'
        />
        <meta property='og:url' content='https://yoursite.com/blog' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://yoursite.com/og-image.jpg' /> {/* Update with your image URL */}
        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Blog | Your Site Name' />
        <meta
          name='twitter:description'
          content='Read our latest blog posts about web development, design, and technology.'
        />
        <meta name='twitter:image' content='https://yoursite.com/twitter-image.jpg' />{' '}
        {/* Update with your image URL */}
      </Helmet>
      <header className='blog-header'>
        <h1>Our Blog</h1>
        <p>Stay updated with the latest articles on web development, design, and technology.</p>
      </header>
      <section className='blog-content'>
        <div className='blog-list'>
          {posts.map(({ id, title, date, excerpt }) => (
            <article key={id} className='blog-preview'>
              <Helmet>
                <title>{title} | Your Site Name</title>
                <meta name='description' content={excerpt} />
                <link rel='canonical' href={`https://yoursite.com/blog/${id}`} />
                {/* Open Graph Meta Tags for each post */}
                <meta property='og:title' content={title} />
                <meta property='og:description' content={excerpt} />
                <meta property='og:url' content={`https://yoursite.com/blog/${id}`} />
                <meta property='og:type' content='article' />
                <meta property='og:image' content='https://yoursite.com/og-image.jpg' />{' '}
                {/* Update with your image URL */}
                {/* Twitter Card Meta Tags for each post */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={excerpt} />
                <meta name='twitter:image' content='https://yoursite.com/twitter-image.jpg' />{' '}
                {/* Update with your image URL */}
              </Helmet>
              <header>
                <h2>
                  <Link to={`/blog/${id}`}>{title}</Link>
                </h2>
                <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
              </header>
              <p>{excerpt}</p>
              <footer>
                <Link to={`/blog/${id}`} aria-label={`Read more about ${title}`}>
                  Read more
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
