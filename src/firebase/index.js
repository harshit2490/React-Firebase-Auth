import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXzKSP3bozTnYkpOMdxBA4V0L4HPZwfQA",
  authDomain: "react-firebase-auth-ca53f.firebaseapp.com",
  projectId: "react-firebase-auth-ca53f",
  storageBucket: "react-firebase-auth-ca53f.appspot.com",
  messagingSenderId: "627014627773",
  appId: "1:627014627773:web:058ecfd6add4a4ef5422d4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);