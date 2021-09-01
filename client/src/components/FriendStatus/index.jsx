import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import FriendInvitedTab from '../FriendInvitedTab';
import PeopleOnline from '../PeopleOnline';
import { OPEN_MESSAGES } from '../../common/constants';
import { useSelector, useDispatch } from 'react-redux';

const FriendStatus = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friendsStore.friends);
  const currentUser = useSelector((state) => state.userStore.currentUser);

  const handleClickMessage = (otherUser) => {
    dispatch({
      type: OPEN_MESSAGES,
      payload: otherUser,
    });
  };

  const handleRenderFriends = () => {
    const { friends: myFriends } = friends;
    return myFriends.map((friend) => {
      console.log('----------');
      console.log(friend);
      return (
        <div
          className={classes.friendContainer}
          key={friend.userID}
          onClick={() => {
            handleClickMessage(friend);
          }}
        >
          <img
            src={friend.avatar}
            className={classes.avatarFriend}
            alt="avatar"
          />
          <Typography className={classes.nameFriend}>
            {friend.username}
          </Typography>
        </div>
      );
    });
  };
  return (
    <div className={classes.containerFriendStatus}>
      <div className={classes.container}>
        <FriendInvitedTab currentUser={currentUser} />
        {currentUser && (
          <div className={classes.friendOnlineContainer}>
            <div className={classes.titleFriendOnlineContainer}>
              <Typography className={classes.title}>Bạn bè</Typography>
            </div>
            {friends && friends.friends.length > 0 ? (
              handleRenderFriends()
            ) : (
              <Typography>
                Bạn không có người bạn nào. Hãy kết bạn với những người bạn thấy
                nào !
              </Typography>
            )}
          </div>
        )}
        <PeopleOnline />
      </div>
    </div>
  );
};

export default FriendStatus;
