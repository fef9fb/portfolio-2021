module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChDZvY_apAVnyaKnW0dGeDNYobPtwjvgM",
  authDomain: "portfolio-2021-c4c84.firebaseapp.com",
  projectId: "portfolio-2021-c4c84",
  storageBucket: "portfolio-2021-c4c84.appspot.com",
  messagingSenderId: "34006388649",
  appId: "1:34006388649:web:d9904225c6fc267c2efeb8",
  measurementId: "G-JHBLX87G6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);