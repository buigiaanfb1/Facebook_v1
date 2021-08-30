import React, { useEffect, useState } from 'react';
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
import { projectFirestore } from '../../firebase/config';

const PeopleOnline = () => {
  const classes = useStyles();
  const [state, setState] = useState(null);
  useEffect(() => {
    const subscriber = projectFirestore
      .collection('users-online')
      .doc('111111111')
      .onSnapshot((doc) => {
        let data = { ...doc.data() };
        setState(data);
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const handleRenderUsersOnline = () => {
    return state.usersOnline.map((user, index) => {
      return (
        <div className={classes.friendContainer}>
          <div className={classes.containerAvatar}>
            <img
              src={user.avatar}
              className={classes.avatarFriend}
              alt="avatar people online"
            />
            <div className={classes.dotGreenOnline}></div>
          </div>
          <Typography className={classes.nameFriend}>
            {user.username}
          </Typography>
        </div>
      );
    });
  };
  return (
    <div className={classes.containerFriendStatus}>
      <div className={classes.container}>
        <div className={classes.friendOnlineContainer}>
          <div className={classes.titleFriendOnlineContainer}>
            <Typography className={classes.title}>Đang online</Typography>
          </div>
          {state && handleRenderUsersOnline()}
        </div>
      </div>
    </div>
  );
};

export default PeopleOnline;
