import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import content1 from '../../common/images/content3.jpeg';
import content2 from '../../common/images/content2.jpeg';
import addIcon from '../../common/images/addIcon.png';
import editIcon from '../../common/images/editIcon.png';

const ProfileUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item lg={2} md={1} sm={0}></Grid>
          <Grid item lg={8} md={10} sm={12}>
            <div className={classes.wallpaperContainer}>
              <img src={content1} className={classes.wallpaper} />
            </div>
            <div className={classes.avatarVsButtonContainer}>
              <div className={classes.left}>
                <img src={content2} className={classes.avatarBig} />
                <Typography className={classes.nameBig}>An An</Typography>
              </div>
              <div className={classes.right}>
                <div className={classes.containerButtons}>
                  <button className={classes.addContainer}>
                    <img src={addIcon} className={classes.iconRight} />
                    <Typography className={classes.iconRightText}>
                      Thêm vào tin
                    </Typography>
                  </button>
                  <button className={classes.editContainer}>
                    <img src={editIcon} className={classes.iconRight} />
                    <Typography className={classes.iconRightText}>
                      Chỉnh sửa trang cá nhân
                    </Typography>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.navigationContainer}>
              <div className={classes.item}>
                <Typography className={classes.itemText}>Bài viết</Typography>
              </div>
              <div className={classes.item}>
                <Typography className={classes.itemText}>Giới thiệu</Typography>
              </div>
              <div className={classes.item}>
                <Typography className={classes.itemText}>Bạn bè</Typography>
              </div>
              <div className={classes.item}>
                <Typography className={classes.itemText}>Ảnh</Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={2} md={1} sm={0}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProfileUp;
