import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArpqd-l5C9YmkBH7gjdizfxLFrC2jikNM",
  authDomain: "magicclub-27186.firebaseapp.com",
  projectId: "magicclub-27186",
  storageBucket: "magicclub-27186.firebasestorage.app",
  messagingSenderId: "758254711751",
  appId: "1:758254711751:web:f30d4ec4e708ba59811fe2",
  measurementId: "G-QBYQ7655TM",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
