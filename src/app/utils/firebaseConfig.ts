// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAsr4xx4lABmFs4S91V2rPFTYWz06WFzM",
  authDomain: "kanban-app-5fbb0.firebaseapp.com",
  projectId: "kanban-app-5fbb0",
  storageBucket: "kanban-app-5fbb0.appspot.com",
  messagingSenderId: "519201238272",
  appId: "1:519201238272:web:741e9092713b77d93d17e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
