import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AuthContext from '../../../context/AuthContext';

import FirebaseContext from '../../../context/FirebaseContext';

const SignUpForm = () => {
  const authContext = useContext(AuthContext.context);
  const firebaseApp = useContext(FirebaseContext);
  const auth = getAuth();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState([]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const SignUp = () => {
    const { firstName, lastName, email, password  } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrors([]);
        alert('User has been created');
      })
      .catch((error) => {
        setErrors([error.message]);
      });
  }

  return (
    <>
      <Typography sx={{ marginBottom: '0.1em', fontSize: '3em', textAlign: 'left', fontWeight: 'bold' }} variant="h4">Create an Account</Typography>
      <Typography sx={{ textAlign: 'left', marginBottom: '1em' }} variant="h6">Sign up to start using the dashboard</Typography>
      <TextField
        error={ errors.length > 0 ? true : false } 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="First Name"
        name="firstName" 
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        error={ errors.length > 0 ? true : false } 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="Last Name"
        name="lastName" 
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        error={ errors.length > 0 ? true : false } 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="Email"
        name="email" 
        variant="filled"
        onChange={handleChange}
      />
      <TextField
        error={ errors.length > 0 ? true : false }
        id="outlined-basic" 
        label="Password"
        name="password" 
        variant="filled"
        onChange={handleChange}
      />
      <Typography 
        sx={{
          display: errors.length > 0 ? 'block' : 'none',
          paddingTop: '1em', 
          marginRight: 'auto', 
          color: 'rgb(211, 47, 47)'
        }} 
        variant="p">
          Error signing up. Please try again.
      </Typography>

      <Button
        sx={{ 
          marginTop: '2em',
          background: '#000',
          textTransform: 'unset',
          padding: '.3em 0',
          fontSize: '18px',
          borderRadius: 0,
          border: '0.2em solid #000'
        }} 
        variant="contained" 
        onClick={SignUp} >
          Sign Up
      </Button>
      <Typography 
        sx={{ marginTop: '1em' }}
        variant="p">Already have an account? <Link to="/login">Sign in</Link></Typography>
    </>
  );
}

export default SignUpForm;
