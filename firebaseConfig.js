// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEEUx-fJPAwmDXN-rUA7zJUypGAuRJ6Ps",
    authDomain: "payday-tcg.firebaseapp.com",
    projectId: "payday-tcg",
    storageBucket: "payday-tcg.appspot.com",
    messagingSenderId: "103270832317",
    appId: "1:103270832317:web:7243674f85cfcdc4527fd4",
    measurementId: "G-8WWEKVN0KD"
};

// Initialize Firebase and export `auth`
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log("Firebase initialized with app name:", app.name); // This should log the app name