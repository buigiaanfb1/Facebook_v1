import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useLogout } from '../../../firebase/data/logout';

const DropdownTools = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout, error } = useLogout();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleLogout = async () => {
    await logout();
    if (!error) {
      window.location.reload();
    }
  };

  const handleClickAway = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <div className={classes.containerIconRight} onClick={handleClick}>
        <i className={classes.iconMuiNavRight}></i>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ zIndex: '999', marginRight: '14px', marginTop: '5px' }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.container}>
            <Link
              style={{ textDecoration: 'none' }}
              to={`profile/${props.user.uid}`}
            >
              <div className={classes.profile}>
                <img src={props.avatar} className={classes.picture} />
                <div className={classes.nameVsDes}>
                  <Typography className={classes.name}>
                    {props.username}
                  </Typography>
                  <Typography className={classes.des}>
                    Xem trang cá nhân của bạn
                  </Typography>
                </div>
              </div>
            </Link>
            <div className={classes.tools}>
              <div className={classes.item} onClick={handleLogout}>
                <div className={classes.iconContainer}>
                  <i className={classes.logoutIcon}></i>
                </div>
                <Typography className={classes.itemText}>Đăng xuất</Typography>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default DropdownTools;
