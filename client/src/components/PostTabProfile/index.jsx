import React from 'react';
import { useStyles } from './styles';
import IntroductionProfile from '../IntroductionProfile';
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
            <Grid container spacing={2}>
              <Grid item lg={5} md={5} sm={5}>
                <IntroductionProfile />
                <PicturesProfile />
                <FriendsProfile />
              </Grid>
              <Grid item lg={7} md={7} sm={7}>
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
