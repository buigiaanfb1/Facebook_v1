import React from 'react';
import { useStyles } from './styles';
import Slogan from './Slogan';
import MoreDetails from './MoreDetails';

const IntroductionProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Slogan />
      <MoreDetails />
    </div>
  );
};

export default React.memo(IntroductionProfile);
