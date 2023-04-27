import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { signout } from '../api';

const Signout = () => {
    const navigate = useNavigate();
    const notSignOut = () => {
        navigate(-1);
    }

    const SignOut = () => {
        console.log('hihi')
        signout();
        navigate('/');
    }
  return (
    <div>
      <div className='flex justify-center flex-col items-center'>
        <div>Are you sure you want to sign out?</div>
        <div>
        <button className='border-solid border-2' onClick={SignOut}>Yes</button>  
        <button className='border-solid border-2' onClick={notSignOut}>No</button>
        </div>
      </div>
    </div>
  )
}

export default Signout
