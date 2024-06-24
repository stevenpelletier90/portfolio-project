import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { getPostById } from '../../utils/blogUtils';
import './BlogPost.scss';

const BlogPost = () => {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) return <div>Post not found</div>;

  return (
    <article className='blog-post'>
      <Helmet>
        <title>{post.title} | Your Site Name</title>
        <meta name='description' content={post.excerpt} />
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.excerpt} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://yoursite.com/blog/${id}`} />
        <link rel='canonical' href={`https://yoursite.com/blog/${id}`} />
      </Helmet>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;
