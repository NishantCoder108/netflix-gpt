// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs5iyqcnkqT-n17mUj_vrlUrNECOGILlI",
  authDomain: "netflixgpt-7fa44.firebaseapp.com",
  projectId: "netflixgpt-7fa44",
  storageBucket: "netflixgpt-7fa44.appspot.com",
  messagingSenderId: "564339696598",
  appId: "1:564339696598:web:3df2fed57c4f6284e27a77",
  measurementId: "G-HLN836TSL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
