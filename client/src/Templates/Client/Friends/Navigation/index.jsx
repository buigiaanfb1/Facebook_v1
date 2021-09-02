import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from '../styles';

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerNavigation}>
      <div className={classes.containerTitle}>
        <Typography className={classes.title}>Bạn bè</Typography>
        <div className={classes.containerIcon}>
          <i className={classes.iconSettings}></i>
        </div>
      </div>
      <NavLink
        to={`/friends`}
        style={{ textDecoration: 'none' }}
        activeClassName={classes.activeClassLink}
      >
        <div className={classes.containerItem}>
          <div className={classes.containerIcon}>
            <i className={classes.iconFriends}></i>
          </div>
          <Typography className={classes.content}>Trang chủ</Typography>
        </div>
      </NavLink>
      <div className={classes.containerItem}>
        <div className={classes.containerIcon}>
          <i className={classes.iconIncoming}></i>
        </div>
        <Typography className={classes.content}>Lời mời kết bạn</Typography>
      </div>
      <div className={classes.containerItem}>
        <div className={classes.containerIcon}>
          <i className={classes.iconSuggest}></i>
        </div>
        <Typography className={classes.content}>Gợi ý</Typography>
      </div>
      <div className={classes.containerItem}>
        <div className={classes.containerIcon}>
          <i className={classes.iconAll}></i>
        </div>
        <Typography className={classes.content}>Tất cả bạn bè</Typography>
      </div>
      <div className={classes.containerItem}>
        <div className={classes.containerIcon}>
          <i className={classes.iconBirthday}></i>
        </div>
        <Typography className={classes.content}>Sinh nhật</Typography>
      </div>
      <div className={classes.containerItem}>
        <div className={classes.containerIcon}>
          <i className={classes.iconFilter}></i>
        </div>
        <Typography className={classes.content}>Danh sách tuỳ chỉnh</Typography>
      </div>
    </div>
  );
};

export default Navigation;
