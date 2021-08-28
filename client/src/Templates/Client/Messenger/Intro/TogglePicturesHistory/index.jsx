import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
const TogglePicturesHistory = ({ messageSelected, currentUser }) => {
  const classes = useStyles();
  const pictures = useSelector(
    (state) => state.messengerPicturesStore.pictures
  );
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRenderPictures = () => {
    return pictures
      .slice(0)
      .reverse()
      .map((picture, index) => {
        return (
          <div className={classes.item} key={index}>
            <img src={picture} alt="avatar" className={classes.picture} />
          </div>
        );
      });
  };
  return (
    <>
      <div className={classes.containerToggle} onClick={handleToggle}>
        <Typography className={classes.toggleText}>
          Hình ảnh được chia sẻ
        </Typography>
        <i
          className={`${toggle ? classes.toggledIcon : classes.toggleIcon}`}
        ></i>
      </div>
      {toggle && pictures.length > 0 ? (
        <div className={classes.containerPictures}>
          {handleRenderPictures()}
        </div>
      ) : null}
    </>
  );
};

export default TogglePicturesHistory;
