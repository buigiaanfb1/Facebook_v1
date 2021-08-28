import React, { useState } from 'react';
import NavbarMessenger from './NavbarMessenger';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import Message from './Message';
import Intro from './Intro';
const Messenger = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.userStore.currentUser);
  const [toggle, setToggle] = useState(false);

  const handleToggleFromChild = () => {
    setToggle(!toggle);
  };
  return (
    <div className={classes.containerMessenger}>
      <div className={classes.containerNavbar}>
        {currentUser && <NavbarMessenger currentUser={currentUser} />}
      </div>
      <div className={classes.main}>
        <div
          className={`${
            toggle ? classes.toggleContainerMessage : classes.containerMessage
          }`}
        >
          <Message
            currentUser={currentUser}
            handleToggleFromChild={handleToggleFromChild}
          />
        </div>
        <div
          className={`${
            toggle ? classes.toggleContainerTools : classes.containerTools
          }`}
        >
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
