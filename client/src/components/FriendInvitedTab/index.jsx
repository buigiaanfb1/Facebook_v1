import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const FriendInvitedTab = () => {
  const classes = useStyles();
  const friendsInvited = useSelector((state) => state.friendsStore.incoming);

  const handleRenderFriendInvited = () => {
    let friend = friendsInvited[0];
    return (
      <div className={classes.friendInviteContainer}>
        <div className={classes.friendInviteTitle}>
          <Typography className={classes.title}>Lời mời kết bạn</Typography>
          <Link to={`/friends`}>
            <Typography className={classes.linkAll}>Xem tất cả</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <img src={friend.avatar} className={classes.pictureAvatarInvite} />
          <div className={classes.containerRight}>
            <div className={classes.nameVsDate}>
              <Typography className={classes.name}>
                {friend.username}
              </Typography>
              <Typography className={classes.date}>6 ngày</Typography>
            </div>
            <div className={classes.buttons}>
              <button className={classes.buttonAccept}>Xác nhận</button>
              <button className={classes.buttonDecline}>Xoá</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return friendsInvited && friendsInvited.length > 0
    ? handleRenderFriendInvited()
    : null;
};

export default FriendInvitedTab;
