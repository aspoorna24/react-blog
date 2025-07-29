// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClIahnd3LT7k4jp5TbKXSafPVqX7IynUE",
  authDomain: "my-blog-3fb65.firebaseapp.com",
  projectId: "my-blog-3fb65",
  storageBucket: "my-blog-3fb65.firebasestorage.app",
  messagingSenderId: "1064148678952",
  appId: "1:1064148678952:web:7c27a154204b29c7ce781d",
  measurementId: "G-60KRYCKK28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);