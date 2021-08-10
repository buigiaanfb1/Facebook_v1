import {
  CURRENT_USER,
  POST_TAB,
  TAB_PROFILE,
  PROFILE_INFO,
  PROFILE_POSTS,
} from '../../common/constants';

const initialState = {
  profileInfo: null,
  tabProfile: POST_TAB,
  currentUser: null,
  profilePosts: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TAB_PROFILE: {
      state.tabProfile = payload;
      return { ...state };
    }
    case PROFILE_POSTS: {
      state.profilePosts = payload;
      return {  ...state };
    }
    case PROFILE_INFO: {
      state.profileInfo = payload;
      return { ...state };
    }
    case CURRENT_USER: {
      state.currentUser = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
