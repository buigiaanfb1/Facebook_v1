import React from 'react';
import { useStyles } from './styles';
import test2 from '../../common/images/test2.jpeg';

const PictureModal = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={props.picturesArr ? props.picturesArr : test2} className={classes.picture} />
    </div>
  );
};

export default PictureModal;
