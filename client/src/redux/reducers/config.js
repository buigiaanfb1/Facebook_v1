import { combineReducers, createStore } from 'redux';
import shareStore from './shareStore';
import userStore from './userStore';
import friendsStore from './friendsStore';

const reducer = combineReducers({ shareStore, userStore, friendsStore });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
