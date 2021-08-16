import { FRIENDS_INITIAL } from '../../common/constants';

const initialState = {
  friends: null,
  requested: null,
  incoming: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FRIENDS_INITIAL: {
      state.friends = payload.friends;
      state.requested = payload.friendsRequested;
      state.incoming = payload.friendsIncoming;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
