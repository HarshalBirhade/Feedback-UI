import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBM_Bv4ONIjXJ49H8GPE9Wx2UTz58",
  authDomain: ".firebaseapp.com",
  projectId: "-2b575",
  storageBucket: "-2b575.appspot.com",
  messagingSenderId: "111015557699",
  appId: "1557699:web:05772172f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
