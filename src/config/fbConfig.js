import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
  apiKey: "AIzaSyDnQKX-Ckm8gjnAg3l33QljfzIkBiDhJTc",
  authDomain: "agrifarm-farm.firebaseapp.com",
  projectId: "agrifarm-farm",
  storageBucket: "agrifarm-farm.appspot.com",
  messagingSenderId: "110824007958",
  appId: "1:110824007958:web:65373fa82f79b49fbd0837"
};
// Initialize Firebase
firebase.initializeApp(config);
  firebase.firestore().settings({timestampsSnapshot: true})

  export default firebase;


  
