import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC88WcFAIVcZQdKrVpYD3z3q3MctKFbpaU",
  authDomain: "e-commerce-db-42022.firebaseapp.com",
  databaseURL: "https://e-commerce-db-42022.firebaseio.com",
  projectId: "e-commerce-db-42022",
  storageBucket: "e-commerce-db-42022.appspot.com",
  messagingSenderId: "82658132324",
  appId: "1:82658132324:web:a29a7e5371ad407dd0ba71"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
