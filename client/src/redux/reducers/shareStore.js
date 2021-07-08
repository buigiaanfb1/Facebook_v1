import { POST_TAB, TAB_PROFILE, USER_INFO } from '../../common/constants';

const initialState = {
  userInfo: null,
  tabProfile: POST_TAB,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TAB_PROFILE: {
      state.tabProfile = payload;
      return { ...state };
    }
    case USER_INFO: {
      state.userInfo = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
