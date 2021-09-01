import React, { useState } from 'react';
import Popper from '@material-ui/core/Popper';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const DropdownTools = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickInChild = (item) => {
    if (item.char === 'deleteInvited') {
      props.handleDeleteInvitedFromChild();
    } else if (item.char === 'acceptInvited') {
      props.handleAcceptInvitedFromChild();
    } else if (item.char === 'unfriend') {
      props.handleUnfriendFromChild();
    }
  };

  const handleRenderChoice = () => {
    if (props.dropDownContent) {
      return props.dropDownContent.map((item, index) => {
        return (
          <div
            className={classes.item}
            key={index}
            onClick={() => {
              handleClickInChild(item);
            }}
          >
            {item.icon ? (
              <div className={classes.iconContainer}>
                <img
                  style={{ marginLeft: '0.5rem' }}
                  src={item.icon}
                  className={classes.iconRight}
                  alt="unfriend"
                />
              </div>
            ) : null}
            <Typography className={classes.itemText}>{item.label}</Typography>
          </div>
        );
      });
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <div
        onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={props.icon} className={classes.iconRight} alt="Add friend" />
        <Typography className={classes.iconRightText}>{props.label}</Typography>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{ zIndex: '999', marginTop: '1rem' }}
      >
        <div className={classes.container}>
          <div className={classes.tools}>{handleRenderChoice()}</div>
        </div>
      </Popper>
    </>
  );
};

export default DropdownTools;
