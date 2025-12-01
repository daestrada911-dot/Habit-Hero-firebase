// Import the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD97G-ljkZ-LuwsNJmz4EICcsFjv52rTTQ",
  authDomain: "habit-hero-a9705.firebaseapp.com",
  projectId: "habit-hero-a9705",
  storageBucket: "habit-hero-a9705.firebasestorage.app",
  messagingSenderId: "185295909790",
  appId: "1:185295909790:web:faf3cbc43d6a038781dc8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
