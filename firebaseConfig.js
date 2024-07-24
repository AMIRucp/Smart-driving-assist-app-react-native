// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAcG1ughEo0dAExP0_eUOv4082GSLApV6A",
  authDomain: "database-ef7b4.firebaseapp.com",
  projectId: "database-ef7b4",
  storageBucket: "database-ef7b4.appspot.com",
  messagingSenderId: "815182181216",
  appId: "1:815182181216:web:37f9158a039e34ffcca405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
