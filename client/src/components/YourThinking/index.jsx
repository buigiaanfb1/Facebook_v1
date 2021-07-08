import React, { useState } from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import YourThinkingModal from '../YourThinkingModal';
import { Typography } from '@material-ui/core';

// Modal Your Thinking
const YourThinking = () => {
  const classes = useStyles();
  const [openPostPictureModal, setPostPictureModal] = useState(false);

  // mở Modal
  const handleOpenModalPicture = () => {
    setPostPictureModal({
      openPostPictureModal: true,
    });
  };

  return (
    <div className={classes.yourThinkingContainer}>
      <div className={classes.avatarVsInput}>
        <img src={avatar} className={classes.avatar} />
        <input
          className={classes.input}
          placeholder="An ơi, bạn đang nghĩ gì thế?"
          onClick={handleOpenModalPicture}
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
      <YourThinkingModal openModal={openPostPictureModal} />
    </div>
  );
};

export default YourThinking;
