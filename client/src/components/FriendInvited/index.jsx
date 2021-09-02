import React, { useState } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { setCollection } from '../../firebase/data/setCollection';
import { getSubDocument } from '../../firebase/data/getDocument';
import { useDispatch } from 'react-redux';
import { FRIENDS_INITIAL } from '../../common/constants';

const FriendInvited = ({ friend, currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [done, setDone] = useState({
    isDone: false,
    label: null,
  });
  const { addFriendToBothUser, removeRequestFriend } = setCollection('users');

  const handleAccept = async (otherUser) => {
    // Delete invitation in database
    await handleDecline(otherUser);
    // then add to friends
    await addFriendToBothUser(
      currentUser,
      'friends',
      currentUser.userID,
      friend,
      'friends',
      friend.userID
    );
    getFriendCollection();
    setDone({
      isDone: true,
      label: 'Đã xác nhận lời mời',
    });
  };
  const handleDecline = async (otherUser) => {
    await removeRequestFriend(
      // đổi vị trí là sai ngay do bên Firebase setup như cc
      currentUser,
      'friendsRequested',
      friend.userID,
      friend,
      'friendsIncoming',
      currentUser.userID
    );
    getFriendCollection();
    setDone({
      isDone: true,
      label: 'Đã xoá yêu cầu',
    });
  };

  const getFriendCollection = async (userID) => {
    // Get new info from firebase
    const friendsRequested = await getSubDocument(
      'users',
      'friendsRequested',
      currentUser.userID
    );
    const friendsIncoming = await getSubDocument(
      'users',
      'friendsIncoming',
      currentUser.userID
    );
    const friends = await getSubDocument(
      'users',
      'friends',
      currentUser.userID
    );
    dispatch({
      type: FRIENDS_INITIAL,
      payload: { friends, friendsIncoming, friendsRequested },
    });
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.containerItemPeople}>
        <img
          src={friend.avatar}
          alt="other people"
          className={classes.avatarOtherPeople}
        />
        <div className={classes.containerInfo}>
          <Typography className={classes.name}>{friend.username}</Typography>
          <div className={classes.containerButton}>
            {!done.isDone ? (
              <>
                <button
                  className={classes.buttonAccept}
                  onClick={() => handleAccept(friend)}
                >
                  Xác nhận
                </button>
                <button
                  className={classes.buttonDecline}
                  onClick={() => handleDecline(friend)}
                >
                  Xoá
                </button>
              </>
            ) : (
              <>
                <button
                  className={classes.buttonDisable}
                  style={{ visibility: 'hidden' }}
                ></button>
                <button className={classes.buttonDisable}>{done.label}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInvited;
