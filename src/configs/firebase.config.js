import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  setDoc,
  doc,
  collection,
  query,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export async function SignInPopup() {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    const userData = response.user;
    console.log({
      uid: userData.uid,
      email: userData.email,
      username: userData.displayName,
    });
    const user = await setDoc(doc(db, "users", userData.uid), {
      uid: userData.uid,
      email: userData.email,
      username: userData.displayName,
    });
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  }
}

export async function LoginPopup() {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    const user = response.user;
    console.log(token, user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  }
}
