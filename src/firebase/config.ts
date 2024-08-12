import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCarGnuKwzqmUgRIybYV44gdUn6RGaqhBM",

  authDomain: "crud-santi.firebaseapp.com",

  projectId: "crud-santi",

  storageBucket: "crud-santi.appspot.com",

  messagingSenderId: "712695390954",

  appId: "1:712695390954:web:371fce18f1a164904f2d93"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export const firebase = {
    app,
    auth
}