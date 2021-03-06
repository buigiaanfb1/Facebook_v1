import { Typography } from '@material-ui/core';
import React from 'react';
import BodyRealtime from './BodyRealtime';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InputMessage from './InputMessage';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

const Message = ({ currentUser, handleCloseModalChatFromChild }) => {
  const classes = useStyles();
  const messageSelected = useSelector(
    (state) => state.messengerStore.messageSelected
  );
  return (
    messageSelected && (
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.containerAvatarVsName}>
            <div
              className={classes.containerIconBack}
              onClick={handleCloseModalChatFromChild}
            >
              <ArrowBackIosIcon className={classes.iconBack} />
            </div>
            <div className={classes.containerAvatar}>
              <img
                src={messageSelected.avatar}
                className={classes.avatar}
                alt="other people"
              />
            </div>
            <div className={classes.containerName}>
              <Link to={`/profile/${messageSelected.userID}`}>
                <Typography className={classes.nameBig}>
                  {messageSelected.username}
                </Typography>
              </Link>
            </div>
          </div>
          <div className={classes.containerTools}>
            {/* <div className={classes.icon}>{videoIcon}</div> */}
            {/* <div className={classes.icon}>{phoneIcon}</div> */}
            {/* <div className={classes.icon} onClick={handleToggle}>
              {toggleIcon}
            </div> */}
          </div>
        </div>
        <div>
          <div className={classes.body} id="bodyChatMessenger">
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
