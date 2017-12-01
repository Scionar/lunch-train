import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './actions/login';
import { logoutReducer } from './actions/logout';
import { updateTrainsReducer } from './actions/update-trains';
import { loadState, saveState } from './local-storage';

let storeInstance = null;

export const initialState = {
  user: null,
  trains: []
};

const persistState = loadState(initialState);

const rootReducer = (state = persistState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return loginReducer(state, action);
    case 'LOG_OUT':
      return logoutReducer(state, action);
    case 'UPDATE_TRAINS':
      return updateTrainsReducer(state, action);
    default:
      return state;
  }
};

const create = () => {
  storeInstance = createStore(rootReducer, applyMiddleware(thunk));

  storeInstance.subscribe(() => {
    const state = storeInstance.getState();
    saveState(state);
  });
};

const clear = () => {
  storeInstance = null;
};

const get = () => storeInstance;

export default {
  create,
  get,
  clear
};
