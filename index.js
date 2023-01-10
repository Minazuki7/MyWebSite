// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCZiJAICD4kaiSVjzb6EugR-QABVorsp8",
  authDomain: "nourwebsite-c7ac4.firebaseapp.com",
  projectId: "nourwebsite-c7ac4",
  storageBucket: "nourwebsite-c7ac4.appspot.com",
  messagingSenderId: "734822542071",
  appId: "1:734822542071:web:740c8987ac2bc9968501f2",
  measurementId: "G-W5366VJQ5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);