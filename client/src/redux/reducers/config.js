import { combineReducers, createStore } from 'redux';
import shareStore from './shareStore';

const reducer = combineReducers({ shareStore });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
