import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Predict from './Components/Predict';
import Auth from './Components/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return(
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Auth />} />
          <Route exact path='/seller' element={(!user ? <Navigate replace to='/' /> : <Predict />)} />
        </Routes>
      </Router>
    </>
    
  )
};

export default App;
