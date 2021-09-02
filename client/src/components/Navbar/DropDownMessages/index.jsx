import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import messenger from '../../../common/images/messenger-nav.svg';
import L1KE from '../../../common/images/L1KE.png';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import SearchBar from '../../SearchBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useDispatch } from 'react-redux';
import { projectFirestore } from '../../../firebase/config';
import { OPEN_MESSAGES } from '../../../common/constants';
import { setCollection } from '../../../firebase/data/setCollection';
import { formatTime } from '../../../helpers/formatTime';
import { useAudio } from '../../../hooks/useAudio';

const DropDownMessages = ({ currentUser }) => {
  const { toggle } = useAudio();
  const firstRef = useRef(false);
  const { updateSeenMessageField } = setCollection('messages-notification');
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [messages, setMessages] = useState({
    messages: null,
    alert: false,
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
          setMessages({
            alert: seen,
            messages: messagesRealtime,
          });
          if (!firstRef.current) {
            firstRef.current = true;
          } else {
            toggle();
          }
        }
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(false);
  };

  // Call firebase đổi seen thành true
  /**
   * hierarchy:
   * messages-notification => currentUserID => newest-messages => otherUserID
   * @param otherUserID
   */
  const handleClickMessage = (otherUser) => {
    updateSeenMessageField(currentUser.userID, otherUser.userID);
    dispatch({
      type: OPEN_MESSAGES,
      payload: otherUser,
    });
  };

  const handleRenderNewestMessages = () => {
    return messages.messages.map((user, index) => {
      return (
        <div
          className={classes.messItem}
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
                {user.userIDSent === currentUser.userID && 'Bạn:'}{' '}
                {user.content}
                <span>&nbsp; · &nbsp;</span>
                {user.createdAt && formatTime(user.createdAt)}
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
                  {user.createdAt && formatTime(user.createdAt)}
                </Typography>
              </div>
            ) : (
              <Typography
                className={`${classes.lastMess} ${
                  !user.seen ? classes.unSeen : null
                }`}
              >
                {user.userIDSent === currentUser.userID ? 'Bạn' : user.username}{' '}
                đã gửi bạn {user.images?.length} ảnh
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
    <div>
      <div className={classes.containerIconRight} onClick={handleClick}>
        <img src={messenger} className={classes.iconMuiNavRight} />
        {messages.alert > 0 && (
          <div className={classes.alertContainer}>
            <Typography className={classes.alert}>{messages.alert}</Typography>
          </div>
        )}
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ zIndex: '999', marginRight: '14px', marginTop: '5px' }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.containerAll}>
            <div className={classes.container}>
              <div className={classes.containerTitle}>
                <Typography className={classes.title}>Messenger</Typography>
              </div>
              <div className={classes.searchBar}>
                <SearchBar />
              </div>
              <div className={classes.containerMess}>
                {messages.messages && messages.messages.length > 0
                  ? handleRenderNewestMessages()
                  : null}
              </div>
            </div>
            <div className={classes.footer}>
              <Link to={`/messages/t/${currentUser.userID}`}>
                <Typography className={classes.link}>
                  Xem tất cả trong Messenger
                </Typography>
              </Link>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default React.memo(DropDownMessages);
