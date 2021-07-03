import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import avatar from '../../common/images/avatar.png';
import test1 from '../../common/images/test1.jpeg';
import test2 from '../../common/images/test2.jpeg';
import test3 from '../../common/images/content1.jpeg';
import test5 from '../../common/images/content2.jpeg';
import test6 from '../../common/images/content3.jpeg';

const PicturesTabProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2} md={1} sm={0}></Grid>
        <Grid item lg={8} md={10} sm={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>Ảnh</Typography>
            <div className={classes.containerAll}>
              <div className={classes.containerImage}>
                <img src={avatar} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test1} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test2} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test3} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test5} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test6} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test1} className={classes.image} />
              </div>
              <div className={classes.containerImage}>
                <img src={test1} className={classes.image} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item lg={2} md={1} sm={0}></Grid>
      </Grid>
    </div>
  );
};

export default PicturesTabProfile;
