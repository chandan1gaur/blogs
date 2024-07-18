// src/components/BlogPostList.js
import React, { useContext, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PostsContext } from '../context/PostsContext';

const BlogPostList = () => {
  const { posts } = useContext(PostsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(posts.length / itemsPerPage)));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='container'>
      <div className='row'>
        {currentPosts.map((post, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
            <BlogPostItem post={post} index={index + indexOfFirstPost} />
          </Col>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button type="button" className='btn btn-primary mt-4' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button type="button" className='btn btn-primary mt-4' onClick={handleNextPage} disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default BlogPostList;
