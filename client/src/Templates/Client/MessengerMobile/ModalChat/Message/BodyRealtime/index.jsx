import { Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../../../../../../firebase/config';
import { likeIconInBody } from '../iconSvg';
import { formatTimeMessage } from '../../../../../../helpers/formatTime';
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles';
import ImageForMessenger from '../../../../../../components/ImageForMessenger';
import { GET_NEW_MESSENGER_PICTURES } from '../../../../../../common/constants';

const BodyRealtime = ({ currentUser, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
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
        let imagesArr = [];
        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
          if (doc.data()?.images) {
            imagesArr.push(doc.data().images[0]);
          }
        });
        if (imagesArr.length > 0) {
          dispatch({
            type: GET_NEW_MESSENGER_PICTURES,
            payload: imagesArr,
          });
        }
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
        <div
          className={`${classes.messageContainer} ${classes.messageBackground}`}
        >
          <Typography className={classes.contentRight}>
            {message.content}
          </Typography>
        </div>
      );
    } else if (message.content && message.images) {
      return (
        <div className={classes.containerImageVsContentRight}>
          <div className={classes.wrapperContainerImageVsContentRight}>
            <div
              className={`${classes.messageContainer} ${classes.messageBackground}`}
            >
              <Typography className={classes.contentRight}>
                {message.content}
              </Typography>
            </div>
          </div>
          <ImageForMessenger image={message.images[0]} />
        </div>
      );
    } else {
      return (
        <ImageForMessenger
          image={message.images[0]}
          className={classes.imageTest}
        />
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
          <ImageForMessenger image={message.images[0]} />
        </div>
      );
    } else {
      return (
        <ImageForMessenger
          image={message.images[0]}
          className={classes.imageTest}
        />
      );
    }
  };

  const handleRenderMessage = () => {
    let flag = messagesRealtime[0].createdAt.seconds;
    return messagesRealtime?.map((message, index) => {
      if (message && message.createdAt?.seconds && index > 0) {
        if (message.createdAt.seconds - 300 < flag) {
        } else {
          flag = message.createdAt.seconds;
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
