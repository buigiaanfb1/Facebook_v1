import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import FacebookStyle from '../../componentsLoader/PostLoader';
import Post from './Post';
import { useParams } from 'react-router-dom';

const Posts = () => {
  console.log('Posts render');
  const profilePosts = useSelector((state) => state.shareStore.profilePosts);
  const { id } = useParams();
  const handleRenderPost = () => {
    return profilePosts
      .slice(0)
      .reverse()
      .map((post) => {
        return <Post key={post.id} post={post} profileID={id} />;
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

  return profilePosts ? handleRenderPost() : handleNothing();
};

export default Posts;
