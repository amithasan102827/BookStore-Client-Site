
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM7nnJqgaRsIBws9x5l7f0grWW9lrAS0s",
    authDomain: "bookstore-54d76.firebaseapp.com",
    projectId: "bookstore-54d76",
    storageBucket: "bookstore-54d76.appspot.com",
    messagingSenderId: "563861322444",
    appId: "1:563861322444:web:691605051031aa7268e069",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);