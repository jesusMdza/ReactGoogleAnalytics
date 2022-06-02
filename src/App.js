import './App.css';
import React, { useContext } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from 'react-router-dom';

import { Container, Box, Button, Typography } from '@mui/material';

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import Home from './pages/Home';
import Form from './components/Form/Form';
import FirebaseContext from './context/FirebaseContext';
import AuthContext from './context/AuthContext';

const firebaseConfig = {
  apiKey: "AIzaSyArqhCdiHzOqsUShAXtHt6b4lAMFmjD3Z4",
  authDomain: "reactanalytics-8927c.firebaseapp.com",
  projectId: "reactanalytics-8927c",
  storageBucket: "reactanalytics-8927c.appspot.com",
  messagingSenderId: "565911450384",
  appId: "1:565911450384:web:3d1c833a4a1b69909feb95",
  measurementId: "G-HE8JTPELBN"
};

const RequireAuth = ({ children }) => {
  let authContext = useContext(AuthContext.context);
  let location = useLocation();

  // redirect user to login if user is undefined but save the location they were trying to go to aka <Home />
  if (!authContext.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <Container 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center' ,
        paddingTop: '10em'
      }}>
      <Routes>
        <Route path="/signup" element={<Form type="signup" />}></Route>
        <Route path="/login" element={<Form type="login" />}></Route>
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
