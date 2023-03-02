// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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