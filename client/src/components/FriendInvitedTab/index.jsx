import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { setCollection } from '../../firebase/data/setCollection';
import { getSubDocument } from '../../firebase/data/getDocument';
import { useDispatch } from 'react-redux';
import { FRIENDS_INITIAL } from '../../common/constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const FriendInvitedTab = ({ currentUser }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const friendsInvited = useSelector((state) => state.friendsStore.incoming);
  const { addFriendToBothUser, removeRequestFriend } = setCollection('users');
  const [done, setDone] = useState({
    isDone: false,
    label: null,
  });

  const handleAccept = async (friend) => {
    // Delete invitation in database
    await handleDecline(friend);
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

  const handleDecline = async (friend) => {
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

  const getFriendCollection = async () => {
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

  const handleRenderFriendInvited = () => {
    let friend = friendsInvited.incoming[0];

    return (
      <div className={classes.containerFriendInvited}>
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
            </div>
            <div className={classes.buttons}>
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
                  <button className={classes.buttonDisable}>
                    {done.label}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return friendsInvited && friendsInvited.incoming.length > 0
    ? handleRenderFriendInvited()
    : null;
};

export default FriendInvitedTab;
