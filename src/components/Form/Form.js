import { Box, Typography, TextField } from '@mui/material';

import SignUpForm from './SignUp/SignUpForm';
import LoginForm from './LoginForm/LoginForm';

const Form = ({ type }) => {
  let formType = {
    login: <LoginForm />,
    signup: <SignUpForm />
  }
 
  return (
    <Box 
      component="form" 
      sx={{ 
        width: '500px',
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'center' 
      }}
      noValidate
      autoComplete="off"
    >
      {
        formType[type]
      }
    </Box>
  );
}

export default Form;
