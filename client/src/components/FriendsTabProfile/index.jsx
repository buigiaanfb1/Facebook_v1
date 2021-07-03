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

const FriendsTabProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={2} md={1} sm={0}></Grid>
        <Grid item lg={8} md={10} sm={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>Bạn bè</Typography>
            <Grid container>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={test1} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={test2} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={test3} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={avatar} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={avatar} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={test5} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={test6} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} md={6} sm={6}>
                <div className={classes.item}>
                  <img src={avatar} className={classes.avatar} />
                  <div className={classes.nameContainer}>
                    <div className={classes.nameVsJob}>
                      <Typography className={classes.name}>Gia An</Typography>
                      <Typography className={classes.job}>
                        FPT University
                      </Typography>
                    </div>
                    <div className={classes.toolContainer}>
                      <i className={classes.tool}></i>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item lg={2} md={1} sm={0}></Grid>
      </Grid>
    </div>
  );
};

export default FriendsTabProfile;
