// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const provider = new GoogleAuthProvider();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpUtRinnEdziadMdnK6WMhOgy9lBKhPQA',
  authDomain: 'web-advcd.firebaseapp.com',
  projectId: 'web-advcd',
  storageBucket: 'web-advcd.appspot.com',
  messagingSenderId: '718348535742',
  appId: '1:718348535742:web:f35d56097748456f455bef',
  measurementId: 'G-J7XFW3P59N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Here your are puttin the @app in the firestore instance
// To access in the project you need export
export const db = getFirestore(app);
export const auth = getAuth();
