import { post } from 'jquery';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FacebookStyle from '../../componentsLoader/PostLoader';
import Post from './Post';

const Posts = ({ posts }) => {
  const handleRenderPost = (posts) => {
    return posts
      .slice(0)
      .reverse()
      .map((post) => {
        return <Post key={uuidv4()} post={post} />;
      });
  };

  const handleNothing = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  return <>{posts ? handleRenderPost(posts) : handleNothing()}</>;
};

export default Posts;
