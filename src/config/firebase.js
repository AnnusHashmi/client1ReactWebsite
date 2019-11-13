import * as firebase from 'firebase' 
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBPUKA1din_xZnbkc6Br0i8ZQoqPTgzpDw",
    authDomain: "controllermilitaryaccounts.firebaseapp.com",
    databaseURL: "https://controllermilitaryaccounts.firebaseio.com",
    projectId: "controllermilitaryaccounts",
    storageBucket: "controllermilitaryaccounts.appspot.com",
    messagingSenderId: "621422599478",
    appId: "1:621422599478:web:29ce886a73081d24876797",
    measurementId: "G-Y4G1LY8MG0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase