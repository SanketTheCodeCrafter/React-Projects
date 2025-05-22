// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bb54f.firebaseapp.com",
  projectId: "mern-auth-bb54f",
  storageBucket: "mern-auth-bb54f.firebasestorage.app",
  messagingSenderId: "1091957787784",
  appId: "1:1091957787784:web:43bc87ce7c3aab4719e33d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);