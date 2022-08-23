// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCD0ZF0RW0ba0TUtADYotuwhke5eWQm44Y",
  authDomain: "hamedgram-9808a.firebaseapp.com",
  projectId: "hamedgram-9808a",
  storageBucket: "hamedgram-9808a.appspot.com",
  messagingSenderId: "676018549280",
  appId: "1:676018549280:web:8447a364a34b133fea4245"
}).auth();

// Initialize Firebase
// export const auth = getAuth(authChat)