
  // firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyACzau03t8lIR5fSpo1Au5Hmo3jQwk7HiM",
    authDomain: "task7-1p-8fe3a.firebaseapp.com",
    projectId: "task7-1p-8fe3a",
    storageBucket: "task7-1p-8fe3a.appspot.com",
    messagingSenderId: "751752493775",
    appId: "1:751752493775:web:407a8b43393639b3c815ba",
    measurementId: "G-J8PRD9EDRF"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
