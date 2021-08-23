import { combineReducers, createStore } from 'redux';
import shareStore from './shareStore';
import userStore from './userStore';
import friendsStore from './friendsStore';
import friendsProfileStore from './friendsProfileStore';
import tabsStore from './tabsStore';
import messagesWindowStore from './messagesWindowStore';
import messengerStore from './messengerStore';
import hideStore from './hideStore';

const reducer = combineReducers({
  shareStore,
  userStore,
  friendsStore,
  friendsProfileStore,
  tabsStore,
  messagesWindowStore,
  messengerStore,
  hideStore,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
