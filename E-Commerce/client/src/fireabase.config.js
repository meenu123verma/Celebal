// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWAA12YxxXDQz5TFHPWz3FhdYp1KqdNA0",
  authDomain: "celebal-18b0f.firebaseapp.com",
  projectId: "celebal-18b0f",
  storageBucket: "celebal-18b0f.appspot.com",
  messagingSenderId: "127097418577",
  appId: "1:127097418577:web:dc7b69f664dbeeac541970",
  measurementId: "G-4KTPXXC2CK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
