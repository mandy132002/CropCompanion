import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Paper, Button, Avatar, Typography, Grid, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { RadioButton } from './RadioButton';
import {signup, signin} from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = { name: '', email: '', password: '', confirmPassword: '',role:''};

const Auth = () => {
  
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [userType,setUserType] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  const [isSubmitted,setIsSubmitted] =useState(false);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isSignup) {
      if(form.password.length<8) {
        toast.error('Password must be at least 8 characters long', {style: {backgroundColor: '#f5cbcc'}});
        return;
      }
      if(!emailRegex.test(String(form.email).toLowerCase()))
      {
        toast.error('Please enter a valid email ID', {style: {backgroundColor: '#f5cbcc'}});
        return;
      }
      console.log(form);
      await signup(form);
    }
    else {
      await signin(form);
    }

    const user = JSON.parse(localStorage.getItem('profile'));
    let payload ={
      "email": " ",
      "role": " ",
      "id": " ",
      "iat": 0,
      "exp": 0
    };
    if(user){
      const parts = user.split('.');
    payload = JSON.parse(atob(parts[1]));
    }
    if(payload.role === "customer"){
      navigate('/customer');
    }
    else if(payload.role === "seller"){
      navigate('/seller');
    }
    
    
    
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleUserChange =(e) => { 
      const {value} = e.target;
      setUserType(value);
      setForm({ ...form, role: value });
   }
    return(
        <>
      <Container component="main" maxWidth="xs" className="mt-10">
      <Paper  elevation={3} className="">
        <Typography className='pl-10 pt-10' component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form  onSubmit={handleSubmit} className="p-10">
        {isSignup && <div className='mb-5'>
        <RadioButton
          changed={handleUserChange}
          userType={userType === "seller"}
          label="Seller"
          value="seller"
          name="role"
        />
        <RadioButton
          changed={handleUserChange}
          userType={userType === "customer"}
          label="Customer"
          value="customer"
          name="role"
        />
        </div> }
          <Grid container spacing={2} className="">
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
          <div className="mt-5"><Button type="submit" fullWidth variant="contained" color="primary" className='' >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button></div>
          
          <Grid container justify="flex-end">
            <Grid item className="">
              <Button onClick={switchMode} className="p-2" >
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
              <ToastContainer/>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
        </>
    );
}

export default Auth;