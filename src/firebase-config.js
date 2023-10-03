
import {getFirestore,connectFirestoreEmulator} from "firebase/firestore";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDQtQWla2JgBIKsD8lzcR-S7dfz39WPcKo",
  authDomain: "notesapp-e7fa2.firebaseapp.com",
  projectId: "notesapp-e7fa2",
  storageBucket: "notesapp-e7fa2.appspot.com",
  messagingSenderId: "961054029499",
  appId: "1:961054029499:web:6c43708c74fb9263b69b9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
connectFirestoreEmulator(db,"localhost",8080);