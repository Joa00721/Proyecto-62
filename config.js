import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBDJNqq2KsUJe3rM6zpusM5GkrHJg4pjfw",
  authDomain: "asistencia-esco.firebaseapp.com",
  databaseURL: "https://asistencia-esco-default-rtdb.firebaseio.com",
  projectId: "asistencia-esco",
  storageBucket: "asistencia-esco.appspot.com",
  messagingSenderId: "1045709867752",
  appId: "1:1045709867752:web:2415b1b8846e974956975d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
