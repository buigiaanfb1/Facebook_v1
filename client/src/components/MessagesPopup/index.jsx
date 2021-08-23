import React, { useState } from 'react';
import Message from './Message';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_MESSAGES_ID } from '../../common/constants';

const MessagesPopup = () => {
  const classes = useStyles();
  const messagesOpening = useSelector(
    (state) => state.messagesWindowStore.messagesOpening
  );
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const dispatch = useDispatch();

  const handleClosePopupFromChild = (id) => {
    dispatch({
      type: CLOSE_MESSAGES_ID,
      payload: id,
    });
  };

  const handleRenderMessage = () => {
    if (messagesOpening && messagesOpening.length > 0) {
      return messagesOpening.map((user, index) => {
        return (
          <Message
            key={index}
            currentUser={currentUser}
            user={user}
            handleClosePopupFromChild={handleClosePopupFromChild}
          />
        );
      });
    }
  };
  return <div className={classes.root}>{handleRenderMessage()}</div>;
};

export default MessagesPopup;
