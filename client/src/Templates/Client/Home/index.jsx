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
        <Grid item md={3} lg={3} sm={3}>
          <Header />
        </Grid>
        <Grid item md={6} lg={6} sm={9} xs={12}>
          <NewsFeed />
        </Grid>
        <Grid item md={3} lg={3}>
          <FriendStatus />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
