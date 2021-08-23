import React from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import { Typography } from '@material-ui/core';
import wow from '../../common/images/wow.svg';
import haha from '../../common/images/haha.svg';
import { Link } from 'react-router-dom';
import content1 from '../../common/images/content1.jpeg';
import content2 from '../../common/images/content2.jpeg';
import content3 from '../../common/images/content3.jpeg';
import content4 from '../../common/images/content4.jpeg';

const FriendStatus = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerFriendStatus}>
      <div className={classes.container}>
        <div className={classes.friendInviteContainer}>
          <div className={classes.friendInviteTitle}>
            <Typography className={classes.title}>Lời mời kết bạn</Typography>
            <Link to={`/friends`}>
              <Typography className={classes.linkAll}>Xem tất cả</Typography>
            </Link>
          </div>
          <div className={classes.item}>
            <img src={avatar} className={classes.pictureAvatarInvite} />
            <div className={classes.containerRight}>
              <div className={classes.nameVsDate}>
                <Typography className={classes.name}>Nguyễn Văn A</Typography>
                <Typography className={classes.date}>6 ngày</Typography>
              </div>
              <div className={classes.buttons}>
                <button className={classes.buttonAccept}>Xác nhận</button>
                <button className={classes.buttonDecline}>Xoá</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.friendOnlineContainer}>
          <div className={classes.titleFriendOnlineContainer}>
            <Typography className={classes.title}>Bạn bè</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={haha} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn A</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={avatar} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn B</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={content1} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn C</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={wow} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn D</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={content2} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn E</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={content3} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn F</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={content4} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn G</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={haha} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn H</Typography>
          </div>
          <div className={classes.friendContainer}>
            <img src={wow} className={classes.avatarFriend} />
            <Typography className={classes.nameFriend}>Nguyễn Văn J</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendStatus;
