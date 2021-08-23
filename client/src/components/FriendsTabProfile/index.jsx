import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FriendsTabProfile = () => {
  const classes = useStyles();
  const friends = useSelector((state) => state.friendsProfileStore.friends);

  const handleRenderFriends = () => {
    return friends.map((friend, index) => {
      return (
        <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
          <Link to={`${friend.userID}`}>
            <div className={classes.item}>
              <img
                src={friend.avatar}
                className={classes.avatar}
                alt="friend pic"
              />
              <div className={classes.nameContainer}>
                <div className={classes.nameVsJob}>
                  <Typography className={classes.name}>
                    {friend.username}{' '}
                  </Typography>
                  <Typography className={classes.job}>
                    FPT University
                  </Typography>
                </div>
                <div className={classes.toolContainer}>
                  <i className={classes.tool}></i>
                </div>
              </div>
            </div>
          </Link>
        </Grid>
      );
    });
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2} md={1} sm={0}></Grid>
        <Grid item lg={8} md={10} sm={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>Bạn bè</Typography>
            {friends && <Grid container>{handleRenderFriends()}</Grid>}
          </div>
        </Grid>
        <Grid item lg={2} md={1} sm={0}></Grid>
      </Grid>
    </div>
  );
};

export default FriendsTabProfile;
