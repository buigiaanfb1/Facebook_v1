import { POST_TAB, TAB_PROFILE } from '../../common/constants';

const initialState = {
  tabProfile: POST_TAB,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TAB_PROFILE: {
      state.tabProfile = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
