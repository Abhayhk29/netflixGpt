// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByC2GfcYNv2pukTcHWeo_UIvNzA09lwAw",
  authDomain: "netflix-3f279.firebaseapp.com",
  projectId: "netflix-3f279",
  storageBucket: "netflix-3f279.appspot.com",
  messagingSenderId: "792682836244",
  appId: "1:792682836244:web:a8bf452032952925f89201",
  measurementId: "G-PPF6Q8FZJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);