import { Typography } from '@material-ui/core';
import React from 'react';
import BodyRealtime from './BodyRealtime';
import { phoneIcon, videoIcon } from './iconSvg';
import InputMessage from './InputMessage';
import { setCollection } from '../../../../firebase/data/setCollection';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const Message = ({ currentUser }) => {
  const classes = useStyles();
  const messageSelected = useSelector(
    (state) => state.messengerStore.messageSelected
  );
  const { updateSeenMessageField } = setCollection('messages-notification');

  // update seen in firebase to true
  const handleSeen = () => {
    // updateSeenMessageField(currentUser.userID, user.userID);
  };

  return (
    messageSelected && (
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.containerAvatarVsName}>
            <div className={classes.containerAvatar}>
              <img
                src={messageSelected.avatar}
                className={classes.avatar}
                alt="other people"
              />
            </div>
            <div className={classes.containerName}>
              <Typography className={classes.nameBig}>
                {messageSelected.username}
              </Typography>
            </div>
          </div>
          <div className={classes.containerTools}>
            <div className={classes.icon}>{videoIcon}</div>
            <div className={classes.icon}>{phoneIcon}</div>
          </div>
        </div>
        <div onClick={handleSeen}>
          <div className={classes.body} id="#bodyChat">
            <div className={classes.introduce}>
              <img
                src={messageSelected.avatar}
                alt="people"
                style={{ objectFit: 'cover' }}
              />
              <Typography className={classes.nameIntroduce}>
                {messageSelected.username}
              </Typography>
              <Typography className={classes.infoIntroduce}>
                Facebook
              </Typography>
              <Typography className={classes.infoIntroduce}>
                Các bạn là bạn bè trên Facebook
              </Typography>
              <Typography className={classes.infoIntroduce}>
                Sống tại Thành phố Hồ Chí Minh
              </Typography>
            </div>
            <div className={classes.messagesContainer}>
              <BodyRealtime currentUser={currentUser} user={messageSelected} />
            </div>
          </div>
          <InputMessage user={messageSelected} />
        </div>
      </div>
    )
  );
};

export default Message;
