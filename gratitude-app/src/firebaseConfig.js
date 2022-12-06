// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy885Cj-vvme75UbPjKuJOLUwU2D83MEM",
  authDomain: "gratitudeapp-ebad9.firebaseapp.com",
  projectId: "gratitudeapp-ebad9",
  storageBucket: "gratitudeapp-ebad9.appspot.com",
  messagingSenderId: "261976795326",
  appId: "1:261976795326:web:94ff91813e01c504e916ef",
  measurementId: "G-67XW76GCLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }