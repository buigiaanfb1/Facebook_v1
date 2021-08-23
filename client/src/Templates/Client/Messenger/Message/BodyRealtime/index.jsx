import { Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../../../../../firebase/config';
import { likeIconInBody } from '../iconSvg';
import { formatTimeMessage } from '../../../../../helpers/formatTime';
import { useStyles } from '../styles';

const BodyRealtime = ({ currentUser, user }) => {
  console.log('BodyRealtime');
  const classes = useStyles();
  const dummy = useRef();
  const [messagesRealtime, setMessagesRealtime] = useState(null);

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
  }, [user]);

  useEffect(() => {
    scrollToBottom();
  }, [messagesRealtime]);

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRenderRightMessage = (message) => {
    if (message.like && !message.content && !message.images) {
      return <div className={classes.iconLike}>{likeIconInBody}</div>;
    } else if (message.content && !message.images) {
      return (
        <div className={classes.messageContainer}>
          <Typography className={classes.content}>{message.content}</Typography>
        </div>
      );
    } else if (message.content && message.images) {
      return (
        <div className={classes.containerImageVsContentRight}>
          <div className={classes.wrapperContainerImageVsContentRight}>
            <div className={classes.messageContainer}>
              <Typography className={classes.content}>
                {message.content}
              </Typography>
            </div>
          </div>
          <img src={message.images[0]} alt="pic" />
        </div>
      );
    } else {
      return (
        <img src={message.images[0]} className={classes.imageTest} alt="pic" />
      );
    }
  };

  const handleRenderLeftMessage = (message) => {
    if (message.like && !message.content && !message.images) {
      return <div className={classes.iconLike}>{likeIconInBody}</div>;
    } else if (message.content && !message.images) {
      return (
        <div className={classes.messageContainer}>
          <Typography className={classes.content}>{message.content}</Typography>
        </div>
      );
    } else if (message.content && message.images) {
      return (
        <div className={classes.containerImageVsContentLeft}>
          <div className={classes.wrapperContainerImageVsContentLeft}>
            <div className={classes.messageContainer}>
              <Typography className={classes.content}>
                {message.content}
              </Typography>
            </div>
          </div>
          <img src={message.images[0]} alt="pic" />
        </div>
      );
    } else {
      return (
        <img src={message.images[0]} className={classes.imageTest} alt="pic" />
      );
    }
  };

  const handleRenderMessage = () => {
    let flag = messagesRealtime[0].createdAt.seconds;
    return messagesRealtime?.map((message, index) => {
      if (message && message.createdAt?.seconds && index > 0) {
        if (message.createdAt.seconds - 300 < flag) {
          console.log(`${message.createdAt.seconds} - 1000 < ${flag}`);
        } else {
          flag = message.createdAt.seconds;
          console.log(`${message.createdAt.seconds} - 1000 > ${flag} .`);
          return (
            <>
              <Typography className={classes.time}>
                {formatTimeMessage(message.createdAt)}
              </Typography>
              {message.userID === currentUser.userID ? (
                <div className={classes.right} key={index}>
                  {handleRenderRightMessage(message)}
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
                  {handleRenderLeftMessage(message)}
                </div>
              )}
            </>
          );
        }
      }
      return (
        <>
          {message.userID === currentUser.userID ? (
            <div className={classes.right} key={index}>
              {handleRenderRightMessage(message)}
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
              {handleRenderLeftMessage(message)}
            </div>
          )}
        </>
      );
    });
  };

  return (
    <div>
      {messagesRealtime && messagesRealtime.length > 0
        ? handleRenderMessage()
        : null}
      <span ref={dummy}></span>
    </div>
  );
};

export default React.memo(BodyRealtime);
