import {
  OPEN_MESSAGES,
  CLOSE_MESSAGES_ID,
  CLOSE_ALL_MESSAGES,
} from '../../common/constants';

const initialState = {
  messagesOpening: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MESSAGES: {
      let index = state.messagesOpening.findIndex((user, index) => {
        return user.userID === payload.userID;
      });
      if (index < 0) {
        state.messagesOpening = [...state.messagesOpening, payload];
      } else {
        return state;
      }
      return { ...state };
    }
    case CLOSE_MESSAGES_ID: {
      let copyMessageID = [...state.messagesOpening];
      let index = copyMessageID.findIndex((user, index) => {
        return user.userID === payload;
      });
      if (index >= 0) {
        copyMessageID.splice(index, 1);
        state.messagesOpening = copyMessageID;
        return { ...state };
      }
      return state;
    }
    case CLOSE_ALL_MESSAGES: {
      state.messagesOpening = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
