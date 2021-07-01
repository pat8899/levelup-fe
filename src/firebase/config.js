import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyDzxpJJAXg5rIRJlCP1yjEE45I8USaSGrQ",
    authDomain: "levelup-login.firebaseapp.com",
    projectId: "levelup-login",
    storageBucket: "levelup-login.appspot.com",
    messagingSenderId: "919120509032",
    appId: "1:919120509032:web:7462e97c6e71712f8c63dd",
    measurementId: "G-K371B9KJJ5"
 
});

export default firebaseConfig;