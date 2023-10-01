
import {getFirestore} from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGNhSqcxayVRdfLhNwvrkRGhxAlQbfr_Y",
  authDomain: "notesapp-4a21f.firebaseapp.com",
  projectId: "notesapp-4a21f",
  storageBucket: "notesapp-4a21f.appspot.com",
  messagingSenderId: "922645059719",
  appId: "1:922645059719:web:042129b35a77467a8ac022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;