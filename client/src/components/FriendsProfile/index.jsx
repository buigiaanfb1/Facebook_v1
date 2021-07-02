import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import content2 from '../../common/images/content2.jpeg';
import content3 from '../../common/images/content3.jpeg';
import content4 from '../../common/images/content4.jpeg';

const FriendsProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.titleContainer1}>
          <Typography className={classes.title}>Bạn bè</Typography>
          <Typography className={classes.amountFriends}>
            123 người bạn
          </Typography>
        </div>
        <Typography className={classes.linkAll}>Xem tất cả bạn bè</Typography>
      </div>
      <div className={classes.friendsContainer}>
        <div className={classes.item}>
          <img src={avatar} className={classes.friendsAvatar} />
          <Typography className={classes.friendName}>Nguyễn Văn A</Typography>
        </div>
        <div className={classes.item}>
          <img src={content2} className={classes.friendsAvatar} />
          <Typography className={classes.friendName}>Nguyễn Văn B</Typography>
        </div>
        <div className={classes.item}>
          <img src={content3} className={classes.friendsAvatar} />
          <Typography className={classes.friendName}>Nguyễn Văn C</Typography>
        </div>
        <div className={classes.item}>
          <img src={content4} className={classes.friendsAvatar} />
          <Typography className={classes.friendName}>Nguyễn Văn D</Typography>
        </div>
      </div>
    </div>
  );
};

export default FriendsProfile;
