import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDqfII-xMZy3S8ytFU4s2c_lCmEzlqdCkQ",
  authDomain: "mmu-srijem.firebaseapp.com",
  projectId: "mmu-srijem",
  storageBucket: "mmu-srijem.appspot.com",
  messagingSenderId: "384155984241",
  appId: "1:384155984241:web:0db5bbba3f374e1b0c96d0",
  measurementId: "G-VKYKG6285W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);