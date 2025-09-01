import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAD-6N95UjJ1jew6X1408cVbbU3Xd386i4",
  authDomain: "loginvirtualcourses-338a3.firebaseapp.com",
  projectId: "loginvirtualcourses-338a3",
  storageBucket: "loginvirtualcourses-338a3.firebasestorage.app",
  messagingSenderId: "32589451084",
  appId: "1:32589451084:web:4fa5d4f52c78c72d7609e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}