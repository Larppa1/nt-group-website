// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq95v09s883QGm9exRWjipLg5Bl9HTWRo",
  authDomain: "nt-group-7d01a.firebaseapp.com",
  projectId: "nt-group-7d01a",
  storageBucket: "nt-group-7d01a.appspot.com",
  messagingSenderId: "53326253092",
  appId: "1:53326253092:web:b069b13513cbd4a1ca1cb1",
  measurementId: "G-PV55M01SD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)