import { createStore } from 'redux';
import taskReducer from './reducers';

const store = createStore(
  taskReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;