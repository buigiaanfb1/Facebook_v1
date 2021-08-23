import React, { useEffect } from 'react';
import NavbarMessenger from './NavbarMessenger';
import { useStyles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  DISPLAY_ICON_MESSAGE_NOTIFICATION,
  HIDE_ICON_MESSAGE_NOTIFICATION,
} from '../../../common/constants';
import Message from './Message';
import Intro from './Intro';
const Messenger = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: HIDE_ICON_MESSAGE_NOTIFICATION,
    });
    return () => {
      dispatch({
        type: DISPLAY_ICON_MESSAGE_NOTIFICATION,
      });
    };
  }, []);
  const currentUser = useSelector((state) => state.userStore.currentUser);
  return (
    <div className={classes.containerMessenger}>
      <div className={classes.containerNavbar}>
        {currentUser && <NavbarMessenger currentUser={currentUser} />}
      </div>
      <div className={classes.main}>
        <Message currentUser={currentUser} />
        <div className={classes.containerTools}>
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
