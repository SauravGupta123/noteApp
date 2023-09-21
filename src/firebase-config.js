// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtVY2hmJKLbRQZjP1t01AyOjkHCVR0IOU",
  authDomain: "noteapp-acf28.firebaseapp.com",
  projectId: "noteapp-acf28",
  storageBucket: "noteapp-acf28.appspot.com",
  messagingSenderId: "485980874185",
  appId: "1:485980874185:web:dcec5985920b55cce3f418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);