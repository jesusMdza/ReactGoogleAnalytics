import { useState, useContext } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import FirebaseContext from '../../../context/FirebaseContext';

const SignUpForm = () => {
  const firebaseApp = useContext(FirebaseContext);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const signUp = () => {
    const { firstName, lastName, email, password  } = values;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(( credential ) => {
        // Signed in
        const user = credential.user
        console.log('Created User');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errorCode', errorCode);
        console.log('error', errorMessage);
      });
  }

  return (
    <>
      <Typography sx={{ marginBottom: '.5em' }} variant="h4">Create an Account with Firebase</Typography>
      <TextField 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="First Name"
        name="firstName" 
        variant="outlined"
        onChange={handleChange}
      />
      <TextField 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="Last Name"
        name="lastName" 
        variant="outlined"
        onChange={handleChange}
      />
      <TextField 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="Email"
        name="email" 
        variant="outlined"
        onChange={handleChange}
      />
      <TextField 
        id="outlined-basic" 
        label="Password"
        name="password" 
        variant="outlined"
        onChange={handleChange}
      />
      <Button
        sx={{ marginTop: '2em' }} 
        variant="contained" 
        onClick={signUp} >
          Sign Up
      </Button>
    </>
  );
}

export default SignUpForm;
