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
    <div className=''>
      <div className='flex flex-col mx-auto mt-40 bg-green-200 border shadow-2xl rounded-xl w-1/2 h-96'>
        <div className='mx-auto mt-20 font-bold text-3xl'>Are you sure you want to sign out?</div>
        <div className='mx-auto mt-20 '>
        <button className='border-solid h-10  w-40 mt-2 mx-auto   bg-green-400 rounded-md' onClick={SignOut}>Yes</button>  
        <button className='border-solid h-10  w-40 mt-2 mx-auto ml-6 bg-red-400 rounded-md' onClick={notSignOut}>No</button>
        </div>
      </div>
    </div>
  )
}

export default Signout
