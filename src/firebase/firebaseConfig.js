// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpUtRinnEdziadMdnK6WMhOgy9lBKhPQA",
  authDomain: "web-advcd.firebaseapp.com",
  projectId: "web-advcd",
  storageBucket: "web-advcd.appspot.com",
  messagingSenderId: "718348535742",
  appId: "1:718348535742:web:f35d56097748456f455bef",
  measurementId: "G-J7XFW3P59N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);