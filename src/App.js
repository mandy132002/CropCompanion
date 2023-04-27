import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Predict from './Components/Predict';
import Auth from './Components/Auth';
import Home from './Components/Home'; 
import SellerP from './Components/SellerP';
import CustHome from './Components/CustHome';
import Product from './Components/Product';
import SoldProduct from './Components/SoldProduct';
import CustPrevProd from './Components/CustPrevProd';
import Signout from './Components/Signout';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Auth/>} />
          <Route exact path='/seller' element={<Home/>}/>
          <Route exact path='/seller/addP' element={<SellerP/>}/>
          <Route exact path='/seller/SoldP' element={<SoldProduct/>}/>
          <Route exact path='/customer' element={<CustHome/>}/>
          <Route exact path='/customer/orders' element={<CustPrevProd/>}/>
          <Route exact path='/customer/:id' element={<Product/>}/>
          <Route exact path='/seller/predict' element={<Predict/>} />
          <Route exact path='/customer/signout' element={<Signout/>} />
          <Route exact path='/seller/signout' element={<Signout/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
};

export default App;
// payload!==null ? :<Auth/>