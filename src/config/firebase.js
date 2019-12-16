import * as firebase from 'firebase' 
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyD194iffPnAxOpIVQ7Pupyd0jlbBqWrd1E",
  authDomain: "cmabackend.firebaseapp.com",
  databaseURL: "https://cmabackend.firebaseio.com",
  projectId: "cmabackend",
  storageBucket: "cmabackend.appspot.com",
  messagingSenderId: "763489474655",
  appId: "1:763489474655:web:c4dd70e23574349a7023ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase