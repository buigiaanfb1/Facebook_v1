import React from 'react';
import { useStyles } from './styles';
import test2 from '../../common/images/test2.jpeg';

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
