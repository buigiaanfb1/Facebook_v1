import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import Slogan from './Slogan';
import MoreDetails from './MoreDetails';

const IntroductionProfile = () => {
  console.log('IntroductionProfile render');
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Slogan />
      <MoreDetails />
      <button className={classes.button}>
        <Typography className={classes.titleButton}>Thêm sở thích</Typography>
      </button>
      <button className={classes.button}>
        <Typography className={classes.titleButton}>
          Thêm nội dung đáng chú ý
        </Typography>
      </button>
    </div>
  );
};

export default React.memo(IntroductionProfile);
