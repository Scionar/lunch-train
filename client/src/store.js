import { createStore } from 'redux';
import { loginReducer } from './actions/login.js';
import { logoutReducer } from './actions/logout.js';

const initialState = {
  user: null,
  trains: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return loginReducer(state, action);
    case 'LOG_OUT':
      return logoutReducer(state, action);
    default:
      return state;
  }
};

let store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
