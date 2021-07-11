import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FacebookStyle from '../../componentsLoader/PostLoader';
import { useStyles } from './styles';
import { getDocumentPostGlobal } from '../../firebase/data/getDocument';
import PostGlobal from './PostGlobal';

const PostsGlobal = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const posts = await getDocumentPostGlobal('posts');
    if (posts && posts.length > 0) {
      setPosts(posts);
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
    return posts.map((post) => {
      return (
        <div key={uuidv4()}>
          <PostGlobal post={post} />
        </div>
      );
    });
  };

  return <div>{posts ? handleRenderPosts() : handleNothing()}</div>;
};

export default PostsGlobal;
