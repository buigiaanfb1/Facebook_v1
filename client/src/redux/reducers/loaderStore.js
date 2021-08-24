import { LOADED, LOADING } from '../../common/constants';

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case LOADED: {
      state.isLoading = false;
      return { ...state };
    }
    default:
      return state;
  }
};
