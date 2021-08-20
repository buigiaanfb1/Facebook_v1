import { Typography } from '@material-ui/core';
import React from 'react';
import avatar from '../../../common/images/avatar.png';
import {
  lineIcon,
  phoneIcon,
  videoIcon,
  downIcon,
  closeIcon,
  addIcon,
  pictureIcon,
  stickerIcon,
  gifIcon,
  happyFaceIcon,
  likeIcon,
} from './iconSvg';
import SearchBar from './SearchBar';
import { useStyles } from './styles';

const Message = ({ handleClosePopupFromChild, item }) => {
  const classes = useStyles();

  const handleClose = () => {
    handleClosePopupFromChild(item.id);
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.containerAvatarVsName}>
          <div className={classes.containerAvatar}>
            <img src={avatar} className={classes.avatar} alt="other people" />
          </div>
          <div className={classes.containerName}>
            <Typography className={classes.nameBig}>Gia An</Typography>
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
      <div className={classes.body}>
        <div className={classes.introduce}>
          <img src={avatar} />
          <Typography className={classes.nameIntroduce}>Gia An</Typography>
          <Typography className={classes.infoIntroduce}>Facebook</Typography>
          <Typography className={classes.infoIntroduce}>
            Các bạn là bạn bè trên Facebook
          </Typography>
          <Typography className={classes.infoIntroduce}>
            Sống tại Thành phố Hồ Chí Minh
          </Typography>
        </div>
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.iconInput}>{addIcon}</div>
        <div className={classes.iconInput}>{pictureIcon}</div>
        <div className={classes.iconInput}>{stickerIcon}</div>
        <div className={classes.iconInput}>{gifIcon}</div>
        <div style={{ padding: '0 0.5rem 0 0rem' }}>
          <SearchBar icon={happyFaceIcon} />
        </div>
        <div className={classes.iconInput}>{likeIcon}</div>
      </div>
    </div>
  );
};

export default Message;
