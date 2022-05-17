import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD05XaWJiVrZXW--DtBUSl8BOzQbGQ5uWY",
  authDomain: "twitter-clone-25a05.firebaseapp.com",
  projectId: "twitter-clone-25a05",
  storageBucket: "twitter-clone-25a05.appspot.com",
  messagingSenderId: "112771060798",
  appId: "1:112771060798:web:09b16cdaf52e733a352d6f",
  measurementId: "G-SK7MJR97QJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
