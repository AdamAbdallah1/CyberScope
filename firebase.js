// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJLNFQfXb3fsmz7COk6Wz9Hr8YecyQBFA",
  authDomain: "cyberscope-838e8.firebaseapp.com",
  projectId: "cyberscope-838e8",
  storageBucket: "cyberscope-838e8.firebasestorage.app",
  messagingSenderId: "320282361531",
  appId: "1:320282361531:web:d06442199386d6ed8e339e",
  measurementId: "G-VD0799HBBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);