import React, { useEffect } from 'react';
import CustNavbar from './CustNavbar';
import useStore from '../store/store';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const prodId = useStore((state) => state.productId);
  
  
  const user = JSON.parse(localStorage.getItem('profile'));
    const parts = user.split('.');
    const payload = JSON.parse(atob(parts[1]));
console.log(payload.email)
  const [bidState, setBidState] = useState({
    price: '',
    bidderName: payload.email
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBidState(prevState => ({ ...prevState, [name]: value }));
  };
console.log(bidState.price)
  const placeBid = (event) => {
    event.preventDefault();
    if (bidState.price <= prodId.price) {
      alert("Bid must be higher than the current highest bid!");
      return;
    }
    axios.patch(`http://localhost:5002/customer/place-bid/${prodId._id}`,bidState)
    .then((response) => {
      console.log('Bid updated:', response.data);
      console.log(prodId);
      navigate('/customer');
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <CustNavbar />
      <div className="m-10 ">
        <div className="m-10 border rounded-xl  justify-between shadow-xl">
          <li className="flex flex-col mt-10">
            <h3 className="ml-10 font-bold text-2xl">{prodId?.name}</h3>
            <p className="ml-10 ">Highest Bid: {prodId?.price}</p>
            <p className="ml-10 ">Quantity: {prodId?.quantity}</p>
            <p className="ml-10 ">Seller ID: {prodId?.sellerId}</p>
            <p className="ml-10 ">ID: {prodId?._id}</p>
            {prodId?.open && (
              <div className='w-96 mx-auto mb-10 '>
                <input className='p-6 border rounded-xl border-black' type="number" name="price" placeholder="Place your bid" value={bidState.price}
        onChange={handleChange}>
        </input>
                <button className='bg-green-400 p-4  rounded-xl ml-12' onClick={placeBid} type="submit">
                  Place Bid
                </button>
              </div>
            )}
          </li>
        </div>
      </div>
    </>
  );
};

export default Product;
