import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBuuRxIkfVBxgJQwBk4ZbI_IO3rnkKEW4w",
  authDomain: "learn-firbase-2ebee.firebaseapp.com",
  projectId: "learn-firbase-2ebee",
  storageBucket: "learn-firbase-2ebee.appspot.com",
  messagingSenderId: "995209852031",
  appId: "1:995209852031:web:a9251fe4b4bfc01e06bb4a",
  measurementId: "G-5RM3MYRF3E"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
