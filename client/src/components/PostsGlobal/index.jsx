import React, { useState, useEffect } from 'react';
import { LOADED, LOADING } from '../../common/constants';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { useStyles } from './styles';
import { getDocumentPostGlobal } from '../../firebase/data/getDocument';
import { useDispatch } from 'react-redux';
import PostGlobal from './PostGlobal';

const PostsGlobal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    dispatch({
      type: LOADING,
    });
    const posts = await getDocumentPostGlobal('posts');
    if (posts && posts.length > 0) {
      setPosts(posts);
      dispatch({
        type: LOADED,
      });
    }
  };

  const handleNothing = () => {
    return (
      <>
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
        <FacebookStyle />
      </>
    );
  };

  const handleRenderPosts = () => {
    return posts.map((post, index) => {
      return (
        <div key={index}>
          <PostGlobal post={post} />
        </div>
      );
    });
  };

  return <div>{posts ? handleRenderPosts() : handleNothing()}</div>;
};

export default PostsGlobal;
