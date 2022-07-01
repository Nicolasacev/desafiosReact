import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIYtTI1IB_3BeAd9aBnP2CUh9ZUNBuBBM",
  authDomain: "crash-parts-df6e9.firebaseapp.com",
  projectId: "crash-parts-df6e9",
  storageBucket: "crash-parts-df6e9.appspot.com",
  messagingSenderId: "343142712391",
  appId: "1:343142712391:web:191fae00ae3d94af7add62"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


