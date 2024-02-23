// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8z_nougryTMcAs4lcIpfLhznaUgnwMU",
  authDomain: "sommcoder.firebaseapp.com",
  projectId: "sommcoder",
  storageBucket: "sommcoder.appspot.com",
  messagingSenderId: "968925151126",
  appId: "1:968925151126:web:add66175c5ab0a37a3a7b7",
  measurementId: "G-E26RXWTNY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
