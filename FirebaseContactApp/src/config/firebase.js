// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXz8AoXf5CEir-zrAfN29rafFduOJkuo",
  authDomain: "contact-app-dd8c2.firebaseapp.com",
  projectId: "contact-app-dd8c2",
  storageBucket: "contact-app-dd8c2.firebasestorage.app",
  messagingSenderId: "458563584304",
  appId: "1:458563584304:web:9375ae95482685e230c8f5"
};

// Add console logs to verify initialization
console.log("Initializing Firebase...");

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log("Firebase initialized successfully");