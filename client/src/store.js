import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './actions/login';
import { logoutReducer } from './actions/logout';
import { updateTrainsReducer } from './actions/update-trains';

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
    case 'UPDATE_TRAINS':
      return updateTrainsReducer(state, action);
    default:
      return state;
  }
};

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState(), 'Updatet state');
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
