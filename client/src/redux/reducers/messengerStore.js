import { SELECTED_MESSAGE_MESSENGER } from '../../common/constants';

const initialState = {
  messageSelected: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECTED_MESSAGE_MESSENGER: {
      state.messageSelected = payload;
      if (payload.userID === state.messageSelected?.userID) return state;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
