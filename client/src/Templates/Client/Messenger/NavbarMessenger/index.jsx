import React, { useEffect, useState, useRef } from 'react';
import L1KE from '../../../../common/images/L1KE.png';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import SearchBar from '../../../../components/SearchBar';
import { useDispatch } from 'react-redux';
import { projectFirestore } from '../../../../firebase/config';
import {
  CLEAR_MESSENGER_PICTURES,
  SELECTED_MESSAGE_MESSENGER,
} from '../../../../common/constants';
import { setCollection } from '../../../../firebase/data/setCollection';
import { formatTime } from '../../../../helpers/formatTime';
import { useAudio } from '../../../../hooks/useAudio';

const NavbarMessenger = ({ currentUser }) => {
  console.log('NavbarMessenger');
  const { updateSeenMessageField } = setCollection('messages-notification');
  const firstRef = useRef(false);
  const { toggle } = useAudio();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [messages, setMessages] = useState({
    messages: null,
    alert: false,
    selectedID: null,
  });

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('messages-notification')
      .doc(currentUser.userID)
      .collection('newest-message')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        let messagesRealtime = [];
        let seen = 0;
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            let id = doc.id;
            let data = { ...doc.data(), id };
            if (!data.seen) seen += 1;
            messagesRealtime.push(data);
          }
        });
        if (messagesRealtime.length > 0) {
          if (!firstRef.current) {
            handleClickMessage(messagesRealtime[0]);
            firstRef.current = true;
          } else {
            toggle();
          }
          setMessages({
            alert: seen,
            messages: messagesRealtime,
          });
        }
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  // Call firebase đổi seen thành true
  /**
   * hierarchy:
   * messages-notification => currentUserID => newest-messages => otherUserID
   * @param {id} otherUserID
   */
  const handleClickMessage = (otherUser) => {
    setMessages({
      ...messages,
      selectedID: otherUser.userID,
    });
    dispatch({
      type: CLEAR_MESSENGER_PICTURES,
    });
    dispatch({
      type: SELECTED_MESSAGE_MESSENGER,
      payload: otherUser,
    });
    updateSeenMessageField(currentUser.userID, otherUser.userID);
  };

  const handleRenderNewestMessages = () => {
    return messages.messages.map((user, index) => {
      return (
        <div
          className={`${
            user.userID === messages.selectedID
              ? classes.messItemSelected
              : classes.messItem
          }`}
          key={index}
          onClick={() => handleClickMessage(user)}
        >
          <div className={classes.avatarContainer}>
            <img
              src={user.avatar}
              alt="avatar people pic"
              className={classes.avatar}
            />
          </div>
          <div className={classes.nameVsLastMess}>
            <Typography className={classes.username}>
              {user.username}
            </Typography>
            {user.content && !user.images ? (
              <Typography
                className={`${classes.lastMess} ${
                  !user.seen ? classes.unSeen : null
                }`}
              >
                {user.content}
                <span>&nbsp; · &nbsp;</span>
                {formatTime(user.createdAt)}
              </Typography>
            ) : user.like ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={L1KE} style={{ marginTop: '0.15rem' }} />
                <Typography
                  className={`${classes.lastMess} ${
                    !user.seen ? classes.unSeen : null
                  }`}
                >
                  <span>&nbsp; · &nbsp;</span>
                  {formatTime(user.createdAt)}
                </Typography>
              </div>
            ) : (
              <Typography
                className={`${classes.lastMess} ${
                  !user.seen ? classes.unSeen : null
                }`}
              >
                {user.username} đã gửi bạn {user.images?.length} ảnh
                <span>&nbsp; · &nbsp;</span>
                {formatTime(user.createdAt)}
              </Typography>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.containerAll}>
      <div className={classes.containerHeader}>
        <div className={classes.containerTitle}>
          <Typography className={classes.title}>Chat</Typography>
        </div>
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={classes.containerMess}>
        {messages.messages && messages.messages.length > 0
          ? handleRenderNewestMessages()
          : null}
      </div>
    </div>
  );
};

export default React.memo(NavbarMessenger);
