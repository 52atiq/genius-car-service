// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,  
  projectId:process.env.REACT_APP_projectId,   
  storageBucket:process.env.REACT_APP_storageBucket,  
  messagingSenderId:process.env.REACT_APP_messagingSenderId,  
  appId:process.env.REACT_APP_appId,   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyDRnytqFjABOo604sn9u3JrWii1q62JxTw",
// authDomain: "genius-car-services-6191e.firebaseapp.com",
// projectId: "genius-car-services-6191e",
// storageBucket: "genius-car-services-6191e.appspot.com",
// messagingSenderId: "635212453745",
// appId: "1:635212453745:web:ef82f89053b1034ad4c8d0",