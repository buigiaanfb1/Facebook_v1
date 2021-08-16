import { CURRENT_USER } from '../../common/constants';

const initialState = {
  currentUser: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER: {
      state.currentUser = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
