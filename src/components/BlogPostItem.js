// src/components/BlogPostItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const BlogPostItem = ({ post, index }) => {
  return (
    <div className="m-2 blog-post-card card">
      {post.urlToImage && <img variant="top" src={post.urlToImage} alt={post.title} />}
      <div class="card-body">
      <h5 class="card-title">{post.title}</h5>
      <p class="card-text">{post.description}</p>
        <Link to={`/post/${index}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogPostItem;
