// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA978jLGEuDV3vOE-gb5M5uMgDxRY8rCc",
  authDomain: "adarsh-bookstore.firebaseapp.com",
  projectId: "adarsh-bookstore",
  storageBucket: "adarsh-bookstore.appspot.com",
  messagingSenderId: "194351101219",
  appId: "1:194351101219:web:3a45871dcf2c9362cb8896",
  measurementId: "G-K0N8DZ7PVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;