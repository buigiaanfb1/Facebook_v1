import {
  POST_TAB,
  TAB_PROFILE,
  PROFILE_INFO,
  PROFILE_POSTS,
  POST_UPLOAD_STATUS,
  CLEAR_PROFILE,
} from '../../common/constants';

const initialState = {
  profileInfo: null,
  tabProfile: POST_TAB,
  profilePosts: null,
  postUploadStatus: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TAB_PROFILE: {
      state.tabProfile = payload;
      return { ...state };
    }
    case PROFILE_POSTS: {
      state.profilePosts = payload;
      return { ...state };
    }
    case PROFILE_INFO: {
      state.profileInfo = payload;
      return { ...state };
    }
    case POST_UPLOAD_STATUS: {
      state.postUploadStatus += 1;
      return { ...state };
    }
    case CLEAR_PROFILE: {
      state.profilePosts = [];
      state.profileInfo = null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
