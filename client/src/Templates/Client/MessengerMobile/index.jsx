import React from 'react';
import { useSelector } from 'react-redux';
import NavbarMessenger from './NavbarMessenger';
import { useStyles } from './styles';

const MessengerMobile = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userStore.currentUser);
  return (
    <div className={classes.container}>
      {currentUser && <NavbarMessenger currentUser={currentUser} />}
    </div>
  );
};

export default MessengerMobile;
