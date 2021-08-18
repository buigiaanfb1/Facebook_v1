import { FRIENDS_PROFILE } from '../../common/constants';

const initialState = {
  friends: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FRIENDS_PROFILE: {
      state.friends = payload.friends;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
