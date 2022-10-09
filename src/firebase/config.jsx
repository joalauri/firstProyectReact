import { initializeApp } from "firebase/app";
import {getFirestore,doc,collection,getDoc,getDocs,query,where,limit,addDoc,updateDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const updateStock = async (cart) => {
  const db = getFirestore();

  cart.map(product => (
    updateDoc(doc(db, "Items-Art-Cards", `${product.id}`), {
      stock:  product.stock - product.quantity
    })
  ))
};
