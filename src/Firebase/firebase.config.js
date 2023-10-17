// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8rP3gecFFU4QdDuHe-rDSO7X8Is32VU",
  authDomain: "coffee-store-bfa11.firebaseapp.com",
  projectId: "coffee-store-bfa11",
  storageBucket: "coffee-store-bfa11.appspot.com",
  messagingSenderId: "780104084044",
  appId: "1:780104084044:web:87ff4c24795441c8dde2e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;