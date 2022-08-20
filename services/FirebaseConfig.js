// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjpMn5o5xHVOGyZVNxgcc10EvKaRJfKq4",
  authDomain: "useronlinecheck.firebaseapp.com",
  databaseURL: "https://useronlinecheck.firebaseio.com",
  projectId: "useronlinecheck",
  storageBucket: "useronlinecheck.appspot.com",
  messagingSenderId: "87761583956",
  appId: "1:87761583956:web:7a452c9d8615ed6f5592c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);