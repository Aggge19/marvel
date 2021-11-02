// Aqui va el driver de conexión de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCq5Vkti778cAJBirO_7UlPwDrNwoBO7Q",
  authDomain: "marvel-d3660.firebaseapp.com",
  projectId: "marvel-d3660",
  storageBucket: "marvel-d3660.appspot.com",
  messagingSenderId: "967250264008",
  appId: "1:967250264008:web:a8a23c43f84804c28c0afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();