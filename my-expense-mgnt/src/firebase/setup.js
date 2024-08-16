import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, collection} from "firebase/firestore"
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCUnnMCq5N0SOOnzpuo8V_cG_kbD2-1MoY",
  authDomain: "netflixclone-ec763.firebaseapp.com",
  projectId: "netflixclone-ec763",
  storageBucket: "netflixclone-ec763.appspot.com",
  messagingSenderId: "635798063234",
  appId: "1:635798063234:web:1ace5180282764e3e28c9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
const db = getFirestore(app)
const moviesCollection = collection(db, "movies")

console.log(db);
