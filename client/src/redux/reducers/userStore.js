import { CURRENT_USER, CURRENT_USER_OFFLINE } from '../../common/constants';
import { setCollection } from '../../firebase/data/setCollection';

const initialState = {
  currentUser: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_USER: {
      const { addUserOnline } = setCollection('users-online');
      addUserOnline(payload);
      state.currentUser = payload;
      return { ...state };
    }

    case CURRENT_USER_OFFLINE: {
      const { removeUserOnline, addUserOnline } = setCollection('users-online');
      removeUserOnline(state.currentUser);
      return state;
    }
    default:
      return { ...state };
  }
};
