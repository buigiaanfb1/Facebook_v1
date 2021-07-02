import React from "react";
// Left
import logo from "../../common/images/logo.png";
// Middle
import home from "../../common/images/home-nav.svg";
import friends from "../../common/images/friends-nav.svg";
import entertainment from "../../common/images/entertainment-nav.svg";
import store from "../../common/images/store-nav.svg";
import video from "../../common/images/video-nav.svg";
// Right
import bell from "../../common/images/bell-nav.svg";
import messenger from "../../common/images/messenger-nav.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        {/* Left */}
        <div className={classes.left}>
          <img src={logo} />
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
        <div className={classes.right}>
          <div className={classes.userContainer}>
            <a href="/profile" className={classes.userContainer2}>
              <img src={logo} className={classes.avatar} />
              <Typography className={classes.nameUser}>An</Typography>
            </a>
          </div>
          <div className={classes.iconNavRightContainer}>
            <div className={classes.containerIconRight}>
              <img src={messenger} className={classes.iconNavRight} />
            </div>
            <div className={classes.containerIconRight}>
              <img src={bell} className={classes.iconNavRight} />
            </div>
            <div className={classes.containerIconRight}>
              <ArrowDropDownIcon className={classes.iconMuiNavRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
