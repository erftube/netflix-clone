// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    })
  } catch(err){
    console.log(err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};


const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  }catch(err){
    console.log(err);
    toast.error(err.code.split("/")[1].split("-").join(" "));
  }
};


const logout = () => {
  signOut(auth);
}

export {auth, db, signUp, login, logout};