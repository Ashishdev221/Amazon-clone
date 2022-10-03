import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4jsJjKO0xDpjw59Md9mkumBfx_pZMP7E",
    authDomain: "clone-5b44f.firebaseapp.com",
    projectId: "clone-5b44f",
    storageBucket: "clone-5b44f.appspot.com",
    messagingSenderId: "745640348094",
    appId: "1:745640348094:web:a08ca20fe592dd8efb91ef",
    measurementId: "G-GEEX6Q0TJ9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};