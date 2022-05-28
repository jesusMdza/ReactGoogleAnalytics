import './App.css';

import { Container, Box, Button, Typography } from '@mui/material';
import Form from './components/Form/Form';
import Context from './context/Context';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArqhCdiHzOqsUShAXtHt6b4lAMFmjD3Z4",
  authDomain: "reactanalytics-8927c.firebaseapp.com",
  projectId: "reactanalytics-8927c",
  storageBucket: "reactanalytics-8927c.appspot.com",
  messagingSenderId: "565911450384",
  appId: "1:565911450384:web:3d1c833a4a1b69909feb95",
  measurementId: "G-HE8JTPELBN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const App = () => {
  return (
    <Context.Provider value={ firebaseApp } >
      <Container 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center' ,
          paddingTop: '10em'
        }}>
        <div>          
          <Form type="login" />
        </div>
      </Container>
    </Context.Provider>
  );
}

export default App;
