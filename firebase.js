// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_bAl6QPZUTENtqCmQoun1p081jG1mP98",
  authDomain: "crm-clinic-46fd6.firebaseapp.com",
  projectId: "crm-clinic-46fd6",
  storageBucket: "crm-clinic-46fd6.appspot.com",
  messagingSenderId: "532777196581",
  appId: "1:532777196581:web:3d4906433ab35257ecb3cc",
  measurementId: "G-TC9JGY9BLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;