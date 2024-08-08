import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-61327.firebaseapp.com",
  projectId: "realestate-61327",
  storageBucket: "realestate-61327.appspot.com",
  messagingSenderId: "1047097897864",
  appId: "1:1047097897864:web:9af4660b990486d021c03d",
  measurementId: "G-F4L21XH2Y8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
