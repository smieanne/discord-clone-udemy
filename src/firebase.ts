
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnylp_OBGmW-bIFgFpa6s23P7YR0YCkFg",
  authDomain: "discord-clone-udemy-85e8c.firebaseapp.com",
  projectId: "discord-clone-udemy-85e8c",
  storageBucket: "discord-clone-udemy-85e8c.appspot.com",
  messagingSenderId: "284400829618",
  appId: "1:284400829618:web:086013e40878545d66b5ab"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };