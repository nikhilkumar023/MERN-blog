// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-615ac.firebaseapp.com",
  projectId: "mern-blog-615ac",
  storageBucket: "mern-blog-615ac.appspot.com",
  messagingSenderId: "299382371538",
  appId: "1:299382371538:web:40a50edc89c6225478a90b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);