import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import messenger from '../../../common/images/messenger-nav.svg';
import avatar from '../../../common/images/avatar.png';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import SearchBar from '../../SearchBar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const DropDownMessages = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClickAway = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <div className={classes.containerIconRight} onClick={handleClick}>
        <img src={messenger} className={classes.iconMuiNavRight} />
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ zIndex: '999', marginRight: '14px', marginTop: '5px' }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.containerAll}>
            <div className={classes.container}>
              <div className={classes.containerTitle}>
                <Typography className={classes.title}>Messenger</Typography>
              </div>
              <div className={classes.searchBar}>
                <SearchBar />
              </div>
              <div className={classes.containerMess}>
                <div className={classes.messItem}>
                  <div className={classes.avatarContainer}>
                    <img
                      src={avatar}
                      alt="avatar people pic"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.nameVsLastMess}>
                    <Typography className={classes.username}>
                      Dustine Nguyen
                    </Typography>
                    <Typography className={classes.lastMess}>
                      ok cam on nha!
                    </Typography>
                  </div>
                </div>
                <div className={classes.messItem}>
                  <div className={classes.avatarContainer}>
                    <img
                      src={avatar}
                      alt="avatar people pic"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.nameVsLastMess}>
                    <Typography className={classes.username}>
                      Dustine Nguyen
                    </Typography>
                    <Typography className={classes.lastMess}>
                      ok cam on nha!
                    </Typography>
                  </div>
                </div>

                <div className={classes.messItem}>
                  <div className={classes.avatarContainer}>
                    <img
                      src={avatar}
                      alt="avatar people pic"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.nameVsLastMess}>
                    <Typography className={classes.username}>
                      Dustine Nguyen
                    </Typography>
                    <Typography className={classes.lastMess}>
                      ok cam on nha!
                    </Typography>
                  </div>
                </div>

                <div className={classes.messItem}>
                  <div className={classes.avatarContainer}>
                    <img
                      src={avatar}
                      alt="avatar people pic"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.nameVsLastMess}>
                    <Typography className={classes.username}>
                      Dustine Nguyen
                    </Typography>
                    <Typography className={classes.lastMess}>
                      ok cam on nha!
                    </Typography>
                  </div>
                </div>

                <div className={classes.messItem}>
                  <div className={classes.avatarContainer}>
                    <img
                      src={avatar}
                      alt="avatar people pic"
                      className={classes.avatar}
                    />
                  </div>
                  <div className={classes.nameVsLastMess}>
                    <Typography className={classes.username}>
                      Dustine Nguyen
                    </Typography>
                    <Typography className={classes.lastMess}>
                      ok cam on nha!
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <Link to="/messages/t/">
                <Typography className={classes.link}>
                  Xem tất cả trong Messenger
                </Typography>
              </Link>
            </div>
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default DropDownMessages;
