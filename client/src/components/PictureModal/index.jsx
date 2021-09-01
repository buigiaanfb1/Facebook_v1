import React from 'react';
import { useStyles } from './styles';

const PictureModal = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src={props.selectedPicture}
        className={classes.picture}
        alt="pic post"
      />
    </div>
  );
};

export default PictureModal;
