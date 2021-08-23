import {
  HIDE_ICON_MESSAGE_NOTIFICATION,
  DISPLAY_ICON_MESSAGE_NOTIFICATION,
} from '../../common/constants';

const initialState = {
  iconMessageNotification: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HIDE_ICON_MESSAGE_NOTIFICATION: {
      state.iconMessageNotification = false;
      return { ...state };
    }
    case DISPLAY_ICON_MESSAGE_NOTIFICATION: {
      state.iconMessageNotification = true;

      return { ...state };
    }
    default:
      return { ...state };
  }
};
