import firebase from 'firebase';
import credentials from './credentials.json';

export default firebase.initializeApp(credentials.firebase);

export const auth = firebase.auth();
auth.onAuthStateChanged(user => console.log(`Auth state is: ${user}`));
