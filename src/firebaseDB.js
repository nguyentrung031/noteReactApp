import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAPqdFVG6QexhdSotrG_B0YRiT8j0k_8sU",
    authDomain: "note-7bb2f.firebaseapp.com",
    databaseURL: "https://note-7bb2f.firebaseio.com",
    projectId: "note-7bb2f",
    storageBucket: "note-7bb2f.appspot.com",
    messagingSenderId: "119152310348",
    appId: "1:119152310348:web:77cd7102c44aa97cc41ce9",
    measurementId: "G-FC26N6G9GG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  export const NoteDB = firebase.database().ref('NoteDB');