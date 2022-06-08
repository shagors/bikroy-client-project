// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZOr3mKE2BjgsmYBMQ_IbuQlHYRX51G7I",
  authDomain: "bikri-koro.firebaseapp.com",
  projectId: "bikri-koro",
  storageBucket: "bikri-koro.appspot.com",
  messagingSenderId: "1089407044428",
  appId: "1:1089407044428:web:31250b6f4f947c4201dde9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;