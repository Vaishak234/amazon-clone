import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDw16CuRfZl6LtvuvbToY0PJHWRryj3vtA",
  authDomain: "clone-2aab1.firebaseapp.com",
  projectId: "clone-2aab1",
  storageBucket: "clone-2aab1.appspot.com",
  messagingSenderId: "432887826577",
  appId: "1:432887826577:web:7a78ae4e3c70e945b6d730",
  measurementId: "G-3ZW1556P3Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth(app)


export { auth }