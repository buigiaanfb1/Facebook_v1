import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import MessengerMobile from '../MessengerMobile';
import Messenger from '../Messenger';
import { useDispatch } from 'react-redux';
import {
  DISPLAY_ICON_MESSAGE_NOTIFICATION,
  HIDE_ICON_MESSAGE_NOTIFICATION,
} from '../../../common/constants';

const MessengerResponsive = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
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

  return isMobile ? <MessengerMobile /> : <Messenger />;
};

export default MessengerResponsive;
