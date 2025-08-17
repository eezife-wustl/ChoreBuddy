// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsmFPw5LOf1g9OA68RVCHL7Q1usGJhPas",
  authDomain: "chorebuddy-17dda.firebaseapp.com",
  databaseURL: "https://chorebuddy-17dda-default-rtdb.firebaseio.com",
  projectId: "chorebuddy-17dda",
  storageBucket: "chorebuddy-17dda.firebasestorage.app",
  messagingSenderId: "838967815836",
  appId: "1:838967815836:web:8aa7138b79d3a33d944759",
  measurementId: "G-0P54LF9Q3K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); //uid is the connector to database

