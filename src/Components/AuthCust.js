import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Paper, Button, Avatar, Typography, Grid, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import useStyles from './styles';
import Input from './Input';

import {signupCust, signinCust} from '../api';

const initialState = { name: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  //const dispatch = useDispatch();
  //const history = useHistory();
  // const classes = useStyles();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  //const [isSeller, setIsSeller ] = useState("customer");
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      signupCust(form);
      navigate('/customer');
    } else {
      signinCust(form);
      navigate('/customer');
    }

    // if(isSeller !== "seller"){
    //   navigate('/customer');
    // }
    // else{
    //   navigate('/seller');
    // }
    
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  //const handleOptionChange = (e) => setIsSeller(e.target.value);
  
    return(
        <>
            <Container component="main" maxWidth="xs">
      <Paper  elevation={3}>
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form  onSubmit={handleSubmit}>
        {/* <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="customer"
        onChange={handleOptionChange}
        >
        <FormControlLabel name="customer" value="customer" control={<Radio />} label="Customer" />
        <FormControlLabel name="seller" value="seller" control={<Radio />} label="Seller" />
        </RadioGroup> */}
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="name" label="Name" handleChange={handleChange} autoFocus />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
            {/* { isSeller==="seller" && <Input name="seller_id" label="Seller ID" handleChange={handleChange} autoFocus />}  */}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
        </>
    );
}

export default Auth;