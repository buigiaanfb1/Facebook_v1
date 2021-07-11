import React from 'react';
import YourThinking from '../YourThinking';
import { useStyles } from './styles';
import PostsGlobal from '../PostsGlobal';

const NewsFeed = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <YourThinking />
      <PostsGlobal />
    </div>
  );
};

export default NewsFeed;
