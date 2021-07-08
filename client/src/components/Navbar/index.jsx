import React, { useState } from 'react';
// Left
import logo from '../../common/images/logo.png';
// Middle
import home from '../../common/images/home-nav.svg';
import friends from '../../common/images/friends-nav.svg';
import entertainment from '../../common/images/entertainment-nav.svg';
import store from '../../common/images/store-nav.svg';
import video from '../../common/images/video-nav.svg';
// Right
import bell from '../../common/images/bell-nav.svg';
import messenger from '../../common/images/messenger-nav.svg';
// Mui Lib
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
// Router
import { Link, NavLink } from 'react-router-dom';
//
import SearchBar from '../SearchBar';
// BE (firebase)
import { getUser } from '../../firebase/data/currentUser';
import { login } from '../../firebase/data/login';
//
import DropdownTools from './DropdownTools';

const Navbar = () => {
  const classes = useStyles();
  const { res } = getUser();
  console.log('navbar');

  // render button Login or buttonProfile
  const handleRenderLoginOrNot = () => {
    if (res) {
      return (
        <>
          <div className={classes.userContainer}>
            <Link to={`/profile/${res.uid}`}>
              <div className={classes.userContainer2}>
                <img src={logo} className={classes.avatar} />
                <Typography className={classes.nameUser}>
                  {res.displayName}
                </Typography>
              </div>
            </Link>
          </div>
          <div className={classes.iconNavRightContainer}>
            <div className={classes.containerIconRight}>
              <img src={messenger} className={classes.iconNavRight} />
            </div>
            <div className={classes.containerIconRight}>
              <img src={bell} className={classes.iconNavRight} />
            </div>
            <div className={classes.containerIconRight}>
              <DropdownTools user={res} />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <button className={classes.button} onClick={login}>
          <Typography className={classes.titleButton}>
            Đăng nhập với Google
          </Typography>
        </button>
      );
    }
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        {/* Left */}
        <div className={classes.left}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <SearchBar />
        </div>
        {/* Middle */}
        <div className={classes.middle}>
          <div className={classes.containerIconMiddle}>
            <img src={home} className={classes.iconNavMiddle} />
          </div>
          <div className={classes.containerIconMiddle}>
            <img src={video} className={classes.iconNavMiddle} />
          </div>
          <div className={classes.containerIconMiddle}>
            <img src={store} className={classes.iconNavMiddle} />
          </div>
          <div className={classes.containerIconMiddle}>
            <img src={friends} className={classes.iconNavMiddle} />
          </div>
          <div className={classes.containerIconMiddle}>
            <img src={entertainment} className={classes.iconNavMiddle} />
          </div>
        </div>
        {/* Right */}
        <div className={classes.right}>{handleRenderLoginOrNot()}</div>
      </div>
    </div>
  );
};

export default Navbar;
