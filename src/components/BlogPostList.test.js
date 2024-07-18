// src/components/BlogPostList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import { PostsProvider } from '../context/PostsContext';

const mockPosts = [
  { title: 'Test Post 1', description: 'Test Description 1', urlToImage: '', publishedAt: '2021-01-01' },
  { title: 'Test Post 2', description: 'Test Description 2', urlToImage: '', publishedAt: '2021-01-02' },
  // Add more mock posts as needed
];

test('renders blog post list', () => {
  render(
    <PostsProvider value={{ posts: mockPosts }}>
      <BrowserRouter>
        <BlogPostList />
      </BrowserRouter>
    </PostsProvider>
  );

  const postTitles = screen.getAllByText(/Test Post/i);
  expect(postTitles).toHaveLength(mockPosts.length);
});

