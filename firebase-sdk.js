// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_PROD_API_KEY,
  authDomain: "sommcoder.firebaseapp.com",
  projectId: "sommcoder",
  storageBucket: "sommcoder.appspot.com",
  messagingSenderId: import.meta.env.VITE_PROD_MSG_SENDER_ID,
  appId: import.meta.env.VITE_PROD_APP_ID,
  measurementId: import.meta.env.VITE_PROD_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_PROD_DB_URL,
};

const app = initializeApp(firebaseConfig);

// // App Check:
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider(import.meta.env.RECAPTCHA_API_KEY),
//   isTokenAutoRefreshEnabled: true,
// });

// Initialize Firebase
const analytics = getAnalytics(app);
export const database = getDatabase(app);
