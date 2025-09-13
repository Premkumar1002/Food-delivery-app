// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "vingoauth.firebaseapp.com",
  projectId: "vingoauth",
  storageBucket: "vingoauth.firebasestorage.app",
  messagingSenderId: "477598038061",
  appId: "1:477598038061:web:19fd086a875cef409d20a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}