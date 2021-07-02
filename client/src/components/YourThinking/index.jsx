import React from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import { Typography } from '@material-ui/core';

const YourThinking = () => {
  const classes = useStyles();
  return (
    <div className={classes.yourThinkingContainer}>
      <div className={classes.avatarVsInput}>
        <img src={avatar} className={classes.avatar} />
        <input
          className={classes.input}
          placeholder="An ơi, bạn đang nghĩ gì thế?"
        />
      </div>
      <div className={classes.toolsContainer}>
        <div className={classes.tool}>
          <i className={classes.liveStream}></i>
          <Typography className={classes.text}>Video trực tiếp</Typography>
        </div>
        <div className={classes.tool}>
          <i className={classes.pictureVideo}></i>
          <Typography className={classes.text}>Ảnh/Video</Typography>
        </div>
        <div className={classes.tool}>
          <i className={classes.emotion}></i>
          <Typography className={classes.text}>Cảm xúc/Hoạt động</Typography>
        </div>
      </div>
    </div>
  );
};

export default YourThinking;
