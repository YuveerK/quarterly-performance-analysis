// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgTcGFuVPuS-M3BuICe7VlHMOzmik3V8U",
  authDomain: "the-campus-intercom-system.firebaseapp.com",
  projectId: "the-campus-intercom-system",
  storageBucket: "the-campus-intercom-system.appspot.com",
  messagingSenderId: "369626587027",
  appId: "1:369626587027:web:7b432395fd3b621a859266",
  measurementId: "G-64YQKM0ZQJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
