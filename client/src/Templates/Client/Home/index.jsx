import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../../components/Header';
import { useStyles } from './styles';
import NewsFeed from '../../../components/NewsFeed';
import FriendStatus from '../../../components/FriendStatus';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={1} lg={3}>
          <Header />
        </Grid>
        <Grid item md={7} lg={6}>
          <NewsFeed />
        </Grid>
        <Grid item md={4} lg={3}>
          <FriendStatus />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
