import { Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../../../../firebase/config';
import { likeIconInBody } from '../iconSvg';
import { useStyles } from '../styles';

const BodyRealtime = ({ currentUser, user }) => {
  const classes = useStyles();
  const dummy = useRef();
  const [messagesRealtime, setMessagesRealtime] = useState();

  useEffect(() => {
    const subscriber = projectFirestore
      .collection('messages')
      .doc(currentUser.userID)
      .collection('with-user')
      .doc(user.userID)
      .collection('messages')
      .orderBy('createdAt', 'asc')
      .onSnapshot((querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        setMessagesRealtime(messages);
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messagesRealtime]);

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleRenderMessage = () => {
    return messagesRealtime?.map((message, index) => {
      return (
        <>
          {message.userID === currentUser.userID ? (
            <div className={classes.right} key={index}>
              {message.content ? (
                <div className={classes.messageContainer}>
                  <Typography className={classes.content}>
                    {message.content}
                  </Typography>
                </div>
              ) : (
                <div className={classes.iconLike}>{likeIconInBody}</div>
              )}
            </div>
          ) : (
            <div className={classes.left} key={index}>
              <div className={classes.avatarInChatContainer}>
                <img
                  src={message.avatar}
                  className={classes.avatarInChat}
                  alt="avatar"
                />
              </div>
              <div className={classes.messageContainer}>
                <Typography className={classes.content}>
                  {message.content}
                </Typography>
              </div>
            </div>
          )}
        </>
      );
    });
  };
  return (
    <div>
      {handleRenderMessage()}
      <span ref={dummy}></span>
    </div>
  );
};

export default React.memo(BodyRealtime);
