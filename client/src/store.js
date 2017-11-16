import { createStore } from 'redux';
import { loginReducer } from './actions/login.js';
import { logoutReducer } from './actions/logout.js';

const initialState = {
  user: null,
  trains: []
};

const persistState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : initialState;

const rootReducer = (state = persistState, action) => {
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

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
