
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-iObrj0laJaHBUmBcOHWJgz64Sn-a-z4",
  authDomain: "class-training-64bc6.firebaseapp.com",
  projectId: "class-training-64bc6",
  storageBucket: "class-training-64bc6.appspot.com",
  messagingSenderId: "570727187655",
  appId: "1:570727187655:web:85d29a7f1d9cd032c8eae2",
  measurementId: "G-BZ5Z7VEEE5"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app) 
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)