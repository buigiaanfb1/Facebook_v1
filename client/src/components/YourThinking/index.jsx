import React, { useState } from 'react';
import { useStyles } from './styles';
import YourThinkingModal from '../YourThinkingModal';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

// Modal Your Thinking
const YourThinking = () => {
  const classes = useStyles();
  const [openPostPictureModal, setPostPictureModal] = useState(false);
  const currentUser = useSelector((state) => state.userStore.currentUser);

  // mở Modal
  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
  };

  return currentUser ? (
    <div className={classes.yourThinkingContainer}>
      <div className={classes.avatarVsInput}>
        <img src={currentUser?.avatar} className={classes.avatar} />
        <input
          className={classes.input}
          placeholder="An ơi, bạn đang nghĩ gì thế?"
          onClick={handleOpenModalPicture}
          value=""
        />
      </div>
      <div className={classes.toolsContainer}>
        <div className={classes.tool}>
          <i className={classes.pictureVideo}></i>
          <Typography className={classes.text}>Ảnh</Typography>
        </div>
        <div className={classes.tool}>
          <i className={classes.emotion}></i>
          <Typography className={classes.text}>Cảm xúc</Typography>
        </div>
      </div>
      <YourThinkingModal
        openModal={openPostPictureModal}
        currentUser={currentUser}
      />
    </div>
  ) : null;
};

export default React.memo(YourThinking);
