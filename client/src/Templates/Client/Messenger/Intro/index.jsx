import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import TogglePicturesHistory from './TogglePicturesHistory';
const Intro = () => {
  const classes = useStyles();
  const messageSelected = useSelector(
    (state) => state.messengerStore.messageSelected
  );
  const currentUser = useSelector((state) => state.userStore.currentUser);
  return (
    messageSelected && (
      <div className={classes.container}>
        <div className={classes.introduce}>
          <img
            src={messageSelected.avatar}
            alt="people"
            style={{ objectFit: 'cover' }}
          />
          <Typography className={classes.nameIntroduce}>
            {messageSelected.username}
          </Typography>
          <Typography className={classes.infoIntroduce}>Facebook</Typography>
          <Typography className={classes.infoIntroduce}>
            Các bạn là bạn bè trên Facebook
          </Typography>
          <Typography className={classes.infoIntroduce}>
            Sống tại Thành phố Hồ Chí Minh
          </Typography>
        </div>
        <TogglePicturesHistory
          currentUser={currentUser}
          messageSelected={messageSelected}
        />
      </div>
    )
  );
};

export default Intro;
