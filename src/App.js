import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Predict from './Components/Predict';
import Auth from './Components/Auth';

const App = () => {
  return(
    <>
    
    {/* <div>{payload.role}</div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Auth/>} />
          <Route exact path='/seller'   element={<Predict/>}/>
          <Route exact path='/customer' element={<Predict/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
};

export default App;
// payload!==null ? :<Auth/>