import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        <Link to={`profile/${user.userID}`}>
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
        </Link>
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

export default React.memo(PeopleOnline);
