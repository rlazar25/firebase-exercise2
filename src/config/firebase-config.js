// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCWMvHzn49SU4RtJs0uU1iSHsvwIcmsgM",
  authDomain: "exer2-b0b46.firebaseapp.com",
  projectId: "exer2-b0b46",
  storageBucket: "exer2-b0b46.appspot.com",
  messagingSenderId: "285650614697",
  appId: "1:285650614697:web:ebe441716493b131876cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)