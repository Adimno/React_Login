// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDesCfDZIdWgRmK2g26QZaayw4dkmVPA",
  authDomain: "fir-auth-cf3da.firebaseapp.com",
  projectId: "fir-auth-cf3da",
  storageBucket: "fir-auth-cf3da.appspot.com",
  messagingSenderId: "282678593731",
  appId: "1:282678593731:web:e676455487b9a40bc67a76"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };