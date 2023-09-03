// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_ID as string,
  authDomain: "int-v1.firebaseapp.com",
  projectId: "int-v1",
  storageBucket: "int-v1.appspot.com",
  messagingSenderId: "1037900691885",
  appId: "1:1037900691885:web:cb4a79cfcaa3dab463c924",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
