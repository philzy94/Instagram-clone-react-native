// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTHPi4s9iBVOe-m0uMe_QHWXCE0lKfwKM",
  authDomain: "rn-instagram-clone-58a44.firebaseapp.com",
  projectId: "rn-instagram-clone-58a44",
  storageBucket: "rn-instagram-clone-58a44.appspot.com",
  messagingSenderId: "601145058850",
  appId: "1:601145058850:web:251c1c5afd64955f400c7b",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export { firebase, db };
