import { Typography } from '@material-ui/core';
import React from 'react';
import BodyRealtime from './BodyRealtime';
import {
  lineIcon,
  phoneIcon,
  videoIcon,
  closeIcon,
  happyFaceIcon,
} from './iconSvg';
import InputMessage from './InputMessage';
import { setCollection } from '../../../firebase/data/setCollection';
import { useStyles } from './styles';

const Message = ({ handleClosePopupFromChild, user, currentUser }) => {
  const classes = useStyles();
  const { updateSeenMessageField } = setCollection('messages-notification');
  const handleClose = () => {
    handleClosePopupFromChild(user.userID);
  };
  // update seen in firebase to true
  const handleSeen = () => {
    updateSeenMessageField(currentUser.userID, user.userID);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.containerAvatarVsName}>
          <div className={classes.containerAvatar}>
            <img
              src={user.avatar}
              className={classes.avatar}
              alt="other people"
            />
          </div>
          <div className={classes.containerName}>
            <Typography className={classes.nameBig}>{user.username}</Typography>
          </div>
        </div>
        <div className={classes.containerTools}>
          <div className={classes.icon}>{videoIcon}</div>
          <div className={classes.icon}>{phoneIcon}</div>
          <div className={classes.icon}>{lineIcon}</div>
          <div className={classes.icon} onClick={handleClose}>
            {closeIcon}
          </div>
        </div>
      </div>
      <div onClick={handleSeen}>
        <div className={classes.body}>
          <div className={classes.introduce}>
            <img
              src={user.avatar}
              alt="people"
              style={{ objectFit: 'cover' }}
            />
            <Typography className={classes.nameIntroduce}>
              {user.username}
            </Typography>
            <Typography className={classes.infoIntroduce}>Facebook</Typography>
            <Typography className={classes.infoIntroduce}>
              Các bạn là bạn bè trên Facebook
            </Typography>
            <Typography className={classes.infoIntroduce}>
              Sống tại Thành phố Hồ Chí Minh
            </Typography>
          </div>
          <div className={classes.messagesContainer}>
            <BodyRealtime currentUser={currentUser} user={user} />
          </div>
        </div>
        <InputMessage icon={happyFaceIcon} user={user} />
      </div>
    </div>
  );
};

export default Message;
