import { combineReducers, createStore } from 'redux';
import shareStore from './shareStore';
import userStore from './userStore';
import friendsStore from './friendsStore';
import friendsProfileStore from './friendsProfileStore';

const reducer = combineReducers({
  shareStore,
  userStore,
  friendsStore,
  friendsProfileStore,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
