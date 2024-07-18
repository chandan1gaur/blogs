
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { PostsContext } from '../context/PostsContext';

const BlogPostDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(PostsContext);
  const post = posts[id];
  const navigate = useNavigate();

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='container'>
      <button type="button" className='btn btn-primary mt-4' onClick={() => navigate(-1)} >Back</button>
      <h1 className="my-4">{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} className="img-fluid mb-4" />}
      <p>{post.content}</p>
      <p className="text-muted">{new Date(post.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogPostDetails;
