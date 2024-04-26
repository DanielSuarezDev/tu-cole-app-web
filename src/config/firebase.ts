import { initializeApp } from 'firebase/app';
// import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore(app);

// let analytics;
// if (typeof window !== 'undefined') {
//   isSupported().then(supported => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

export {
  auth,
  db,
  // analytics,
  app,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  storage,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut
};
