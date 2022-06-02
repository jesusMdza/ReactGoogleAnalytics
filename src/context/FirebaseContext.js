import { createContext } from 'react';
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyArqhCdiHzOqsUShAXtHt6b4lAMFmjD3Z4",
  authDomain: "reactanalytics-8927c.firebaseapp.com",
  projectId: "reactanalytics-8927c",
  storageBucket: "reactanalytics-8927c.appspot.com",
  messagingSenderId: "565911450384",
  appId: "1:565911450384:web:3d1c833a4a1b69909feb95",
  measurementId: "G-HE8JTPELBN"
};
const firebaseApp = initializeApp(firebaseConfig);

let value = { firebaseApp }

const firebaseProvider = ({ children }) => {
  return <FirebaseContext.Provider value={value}>{ children }</FirebaseContext.Provider>
}

const firebaseContext = {
  context: FirebaseContext,
  provider: firebaseProvider
}

export default firebaseContext;
