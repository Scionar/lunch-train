import firebase from 'firebase';
import firebaseui from 'firebaseui';
import credentials from './credentials.json';
import store from './store.js';
import { loginAction } from './actions/login';
import { logoutAction } from './actions/logout';

export const initialize = () => {
  firebase.initializeApp(credentials.firebase);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.get().dispatch(loginAction(user));
    } else {
      store.get().dispatch(logoutAction(user));
    }
  });
};

export const uiConfig = () => {
  const uiConfig = {
    signInSuccessUrl: 'http://localhost/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('.firebase-login', uiConfig);
};

export default {
  initialize,
  uiConfig
};
