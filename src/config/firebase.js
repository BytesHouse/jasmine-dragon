// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDQ_04OFskq2vEGwFn9cHtWFDdzB4cxOw",
    authDomain: "jasmine-dragon-c0185.firebaseapp.com",
    projectId: "jasmine-dragon-c0185",
    storageBucket: "jasmine-dragon-c0185.appspot.com",
    messagingSenderId: "648555367724",
    appId: "1:648555367724:web:6d11d8cc666cf4caacf089",
    measurementId: "G-KXNZZ8CHK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth}