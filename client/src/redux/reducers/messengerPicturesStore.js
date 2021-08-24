import {
  CLEAR_MESSENGER_PICTURES,
  GET_NEW_MESSENGER_PICTURES,
} from '../../common/constants';

const initialState = {
  pictures: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NEW_MESSENGER_PICTURES: {
      if (payload.length === state.pictures.length) return state;
      state.pictures = payload;
      return { ...state };
    }
    case CLEAR_MESSENGER_PICTURES: {
      state.pictures = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
