import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArMxaUC6xD-Cu-QpCvn-oECW_xGy4OPtI",
  authDomain: "mbravosarria-5ee42.firebaseapp.com",
  projectId: "mbravosarria-5ee42",
  storageBucket: "mbravosarria-5ee42.appspot.com",
  messagingSenderId: "167454404522",
  appId: "1:167454404522:web:8cca6fe4472851483405d3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
