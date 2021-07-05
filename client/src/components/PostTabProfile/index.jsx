import React from 'react';
import { useStyles } from './styles';
import IntroductionProfile from '../IntroductionProfile';
import YourThinking from '../YourThinking';
import PicturesProfile from '../PicturesProfile';
import FriendsProfile from '../FriendsProfile';
import Post from '../Post';
import Grid from '@material-ui/core/Grid';

const ProfileDown = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2} md={1} sm={0}></Grid>
        <Grid item lg={8} md={10} sm={12}>
          <div className={classes.container}>
            {/*  */}
            {/*  */}
            <Grid container spacing={0}>
              <Grid item lg={5} md={5} sm={5}>
                <div className={classes.item}>
                  <IntroductionProfile />
                </div>
                <div className={classes.item}>
                  <PicturesProfile />
                </div>
                <div className={classes.item}>
                  <FriendsProfile />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} style={{ marginTop: '1rem' }}>
                <YourThinking />
                <Post />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={2} md={1} sm={0}></Grid>
      </Grid>
    </div>
  );
};

export default ProfileDown;
