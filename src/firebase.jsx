import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeZ1vUSuwg_H5MtaTDoWSV4_4VJgxWNu4",
  authDomain: "tomo-router.firebaseapp.com",
  projectId: "tomo-router",
  storageBucket: "tomo-router.appspot.com",
  messagingSenderId: "1022410057285",
  appId: "1:1022410057285:web:04f030f8ff889991a2252c",
  measurementId: "G-E198E0V0FZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }