import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import Navigation from './Navigation';
import FriendsInvited from './FriendsInvited';

const Friends = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      {/*  */}
      <div className={classes.containerMain}>
        <div className={classes.containerTitleMain}>
          <Typography className={classes.titleMain}>Lời mời kết bạn</Typography>
        </div>
        <FriendsInvited />
      </div>
    </div>
  );
};

export default Friends;
