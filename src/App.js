import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Predict from './Components/Predict';
import Auth from './Components/Auth';
import Home from './Components/Home'; 
import SellerP from './Components/SellerP';
import CustHome from './Components/CustHome';

const App = () => {
  return(
    <>
    
    {/* <div>{payload.role}</div> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Auth/>} />
          <Route exact path='/seller'   element={<Home/>}/>
          <Route exact path='/seller/addP'   element={<SellerP/>}/>
          <Route exact path='/customer' element={<CustHome/>}/>
          <Route exact path='/seller/predict' element={<Predict/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
};

export default App;
// payload!==null ? :<Auth/>