import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';
const TogglePicturesHistory = ({ messageSelected }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [pictures, setPictures] = useState(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleGetPictures = () => {};
  return (
    <div className={classes.containerToggle} onClick={handleToggle}>
      <Typography className={classes.toggleText}>
        Hình ảnh được chia sẻ
      </Typography>
      <i className={`${toggle ? classes.toggledIcon : classes.toggleIcon}`}></i>
    </div>
  );
};

export default TogglePicturesHistory;
