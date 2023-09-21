
import {getFirestore} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGJ0RLNrifCf8n8aCWqjee-D51cfDuugw",
  authDomain: "mynotesapp-eae5d.firebaseapp.com",
  projectId: "mynotesapp-eae5d",
  storageBucket: "mynotesapp-eae5d.appspot.com",
  messagingSenderId: "100704111552",
  appId: "1:100704111552:web:f7b51bc6a98290d23d1625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;