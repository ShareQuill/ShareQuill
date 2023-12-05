// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFZYWoJB6w3byAK6uBSgeZwK3c7lr01o",
  authDomain: "sharequill13.firebaseapp.com",
  projectId: "sharequill13",
  storageBucket: "sharequill13.appspot.com",
  messagingSenderId: "734054634529",
  appId: "1:734054634529:web:5cdfa0d3297e450ca73f60",
  measurementId: "G-Y30DN2G56Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);