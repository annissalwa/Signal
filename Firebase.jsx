import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBktu0HlL0k8bwC5zYE3ZSQ5ksmxvAWQKQ",
  authDomain: "signalclone-17.firebaseapp.com",
  projectId: "signalclone-17",
  storageBucket: "signalclone-17.appspot.com",
  messagingSenderId: "445785301844",
  appId: "1:445785301844:web:236349c1d06532d93c1ec1",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };