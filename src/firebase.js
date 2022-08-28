import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAl5epsMPA51qBMIY08XZAKIEub9nzXnec",
  authDomain: "fir-auth-e8961.firebaseapp.com",
  projectId: "fir-auth-e8961",
  storageBucket: "fir-auth-e8961.appspot.com",
  messagingSenderId: "486701611623",
  appId: "1:486701611623:web:27e5e51f2f68f05d85b2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
