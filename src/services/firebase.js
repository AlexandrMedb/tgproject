// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAuvr76gi8WiwS_1HSAIccEQ46Y-WEn60",
  authDomain: "tablegamednd.firebaseapp.com",
  databaseURL:
    "https://tablegamednd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tablegamednd",
  storageBucket: "tablegamednd.appspot.com",
  messagingSenderId: "981410285345",
  appId: "1:981410285345:web:d79a958551ca1a33a82060",
};

const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// Initialize Firebase
export function writeUserData(userId) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: "sa",
    email: "trw@mail.ru",
  });
}

export const auth = getAuth();

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const leave = () => signOut(auth);
