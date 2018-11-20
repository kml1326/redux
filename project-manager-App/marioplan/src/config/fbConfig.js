// import firebase from 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCfEkgRZp6EZckSXtGPA1PXZJkHRZtVwQo",
    authDomain: "net-ninja-e67d4.firebaseapp.com",
    databaseURL: "https://net-ninja-e67d4.firebaseio.com",
    projectId: "net-ninja-e67d4",
    storageBucket: "net-ninja-e67d4.appspot.com",
    messagingSenderId: "588601712429"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;