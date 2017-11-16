import firebase from 'firebase';
import credentials from './credentials.json';
import store from './store.js';
import { loginAction } from './actions/login';
import { logoutAction } from './actions/logout';

export default firebase.initializeApp(credentials.firebase);

export const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginAction(user));
  } else {
    store.dispatch(logoutAction(user));
  }
});
