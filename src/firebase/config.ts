import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCarGnuKwzqmUgRIybYV44gdUn6RGaqhBM",
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGE_ID, // Recuerda que corregimos esto anteriormente
  appId: import.meta.env.FIREBASE_APP_ID
};



// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const auth = getAuth(app)

export const firebase = {
    app,
    auth,
    db
}