import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGRdbaNtTCekrhjYSHFcXqSjyyj91hn78",
  authDomain: "auth-practice-31eb3.firebaseapp.com",
  projectId: "auth-practice-31eb3",
  storageBucket: "auth-practice-31eb3.appspot.com",
  messagingSenderId: "148409641055",
  appId: "1:148409641055:web:e52072f9789266dac553ea",
  measurementId: "G-L15MFN5MDK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
