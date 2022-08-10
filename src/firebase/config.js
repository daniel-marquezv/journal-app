// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7MNmqtifsW9aChIqoJgxD43YEGh9H4Y0",
    authDomain: "react-cursos-5343d.firebaseapp.com",
    projectId: "react-cursos-5343d",
    storageBucket: "react-cursos-5343d.appspot.com",
    messagingSenderId: "563096068864",
    appId: "1:563096068864:web:d3b24e777b9088a64809e5"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp)
export const FirebaseBD = getFirestore(Firebaseapp)