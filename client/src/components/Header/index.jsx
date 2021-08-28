import React from 'react';
import { useStyles } from './styles';
import avatar from '../../common/images/avatar.png';
import friends from '../../common/images/friends-header.png';
import watch from '../../common/images/watch-header.png';
import save from '../../common/images/save-header.png';
import market from '../../common/images/market-header.png';
import group from '../../common/images/group-header.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userStore.currentUser);
  return (
    currentUser && (
      <div className={classes.container}>
        <div style={{ marginTop: '1rem' }}></div>
        <div className={classes.wrapperItem}>
          <Link to={`profile/${currentUser.userID}`}>
            <div className={classes.itemProfile}>
              <img src={currentUser.avatar} className={classes.itemPicture} />
              <Typography className={classes.text}>
                {currentUser.username}
              </Typography>
            </div>
          </Link>
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.item}>
            <img src={friends} className={classes.itemPicture} />
            <Typography className={classes.text}>Tìm kiếm bạn bè</Typography>
          </div>
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.item}>
            <img src={group} className={classes.itemPicture} />
            <Typography className={classes.text}>Nhóm</Typography>
          </div>
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.item}>
            <img src={watch} className={classes.itemPicture} />
            <Typography className={classes.text}>Watch</Typography>
          </div>
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.item}>
            <img src={market} className={classes.itemPicture} />
            <Typography className={classes.text}>Marketplace</Typography>
          </div>
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.item}>
            <img src={save} className={classes.itemPicture} />
            <Typography className={classes.text}>Đã lưu</Typography>
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
