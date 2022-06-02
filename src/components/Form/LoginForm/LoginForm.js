import './LoginForm.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, Button, Stack, Checkbox, FormControlLabel } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import FirebaseContext from '../../../context/FirebaseContext';

// TODO: set up state change with textfields MUI

const LoginForm = () => {
  const firebaseApp = useContext(FirebaseContext);
  const [values, setValues] = useState({
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

  const login = () => {
    const { email, password  } = values;
    const auth = getAuth();

    // signInWithEmailAndPassword(auth, email, password)
    //   .then(( credential ) => {
    //     // Signed in
    //     const user = credential.user
    //     console.log('this is the signed in user');
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     console.log('errorCode', errorCode);
    //     console.log('error', errorMessage);
    //   });
  }

  return (
    <>
      <Typography sx={{ marginBottom: '0.1em', textAlign: 'left', fontSize: '4em' }} variant="h4">Welcome back</Typography>
      <Stack sx={{ alignItems: 'flex-end', marginBottom: '1em' }} direction="row">
        <Typography sx={{ marginRight: '.2em' }} variant="h6">New here?</Typography>
        <Link to="/signup">
          <Button
            className="some-button"
            sx={{ 
              textTransform: 'unset', 
              padding: 0, 
              margin: 0, 
              letterSpacing: 0
              }}>
                Sign Up
          </Button>
        </Link>
      </Stack>

      <TextField 
        sx={{ marginBottom: '1em', background: 'none' }} 
        id="outlined-basic" 
        label="Email" 
        name="email"
        variant="filled"
        onChange={handleChange}
      />
      <TextField 
        sx={{ marginBottom: '1em' }} 
        id="outlined-basic" 
        label="Password" 
        name="password"
        variant="filled" 
        onChange={handleChange}
      />

      <Stack 
        sx={{ marginTop: '1em' }}
        direction="row"
        justifyContent="space-between"
      >
        <FormControlLabel 
          control={ <Checkbox className="checkbox" defaultChecked /> }
          label="Remember Me"
        />
        <Button 
          sx={{ padding: 0 }}
          className="login-button" 
          variant="text">
            Forgot Password?
        </Button>
      </Stack>
      
      <Stack spacing={3}>
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
          onClick={login} >
            Log In
        </Button>
        
        <Stack direction="row" alignItems="center" spacing={6}>
          <Box 
            sx={{ 
              width: '100%', 
              height: '2px', 
              background: '#000', 
              padding: 0, 
              margin: 0 
              }} 
          />
          <Typography variant="h5">OR</Typography>
          <Box 
            sx={{ 
              width: '100%', 
              height: '2px', 
              background: '#000', 
              padding: 0, 
              margin: 0 
              }} 
          />
        </Stack>

        <Button
          sx={{ 
            marginTop: '2em',
            background: '#000',
            textTransform: 'unset',
            padding: '.3em 0',
            fontSize: '18px',
            borderRadius: 0,
            background: '#FFF',
            boxShadow: 'none',
            color: '#000',
            fontWeight: 'bold',
            border: '0.2em solid #000'
          }} 
          className="secondary-button"
          variant="contained" 
          onClick={login} >
            Log In with Google
        </Button>
      </Stack>
    </>
  );
}

export default LoginForm;
