// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34AZ5zzEApyD-yQU4TP7t5v0WlaA7yS0",
  authDomain: "netflix-gpt-85389.firebaseapp.com",
  projectId: "netflix-gpt-85389",
  storageBucket: "netflix-gpt-85389.appspot.com",
  messagingSenderId: "1009230949019",
  appId: "1:1009230949019:web:67e5115fe5e2d691a4f43e",
  measurementId: "G-QEH3P0YCQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
