import React, { useState } from 'react';
import Message from './Message';
import { useStyles } from './styles';

let pseudoArr = [
  {
    id: '1',
    messages: [],
  },
  {
    id: '2',
    messages: [],
  },
  {
    id: '3',
    messages: [],
  },
];

const MessagesPopup = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    messages: pseudoArr,
  });

  const handleClosePopupFromChild = (id) => {
    let index = state.messages.findIndex((item, index) => {
      return item.id === id;
    });
    let copyMessages = [...state.messages];
    copyMessages.splice(index, 1);
    setState({
      messages: copyMessages,
    });
  };

  const handleRenderMessage = () => {
    return state.messages.map((item, index) => {
      return (
        <Message
          key={index}
          item={item}
          handleClosePopupFromChild={handleClosePopupFromChild}
        />
      );
    });
  };
  return <div className={classes.root}>{handleRenderMessage()}</div>;
};

export default MessagesPopup;
