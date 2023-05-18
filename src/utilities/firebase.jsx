
import { initializeApp } from "firebase/app";
//important for google monitization
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

//configurations for working with firebase. In real life projects ensure that you create environment variables for this.
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
//making the authentication, googleprovider and the database available throughout the app 
export const auth = getAuth(app) 
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)