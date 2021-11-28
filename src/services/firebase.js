import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}      from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyDH8Y_LufdkpOJmklV5itLmJiUGBEBL7KU",
  authDomain: "chat-of-react-gb.firebaseapp.com",
  projectId: "chat-of-react-gb",
  storageBucket: "chat-of-react-gb.appspot.com",
  messagingSenderId: "190960775686",
  appId: "1:190960775686:web:3bc79a4ef7d5b292748987"
});

 export const auth = getAuth(app)

 export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass)


export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)

export const logOut = async () => await signOut(auth);