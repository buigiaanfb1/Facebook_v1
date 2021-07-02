import React from 'react';
import YourThinking from '../YourThinking';
import { useStyles } from './styles';
import Post from '../Post';

const NewsFeed = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <YourThinking />
      <Post />
    </div>
  );
};

export default NewsFeed;
