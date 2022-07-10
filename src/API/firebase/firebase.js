// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUGV1wi4sDUPCXyapjV0atkNxU0ZgPjNo",
  authDomain: "cosecha-coffee-2730d.firebaseapp.com",
  projectId: "cosecha-coffee-2730d",
  storageBucket: "cosecha-coffee-2730d.appspot.com",
  messagingSenderId: "6881228309",
  appId: "1:6881228309:web:3cb55075c98251bf99c01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)