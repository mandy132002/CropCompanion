import React from 'react';
import CustNavbar from './CustNavbar';
import useStore from '../store/store';
import { useState } from 'react';
import axios from 'axios';
const Product = () => {
  const prodId = useStore((state) => state.productId);
  const user = JSON.parse(localStorage.getItem('profile'));
    const parts = user.split('.');
    const payload = JSON.parse(atob(parts[1]));

  const [bidState, setBidState] = useState({
    price: '',
    bidder: payload.email
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBidState(prevState => ({ ...prevState, [name]: value }));
  };

  const placeBid = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:5002/customer/place-bid/${prodId._id}`,bidState)
    .then((response) => {
      console.log('Bid updated:', response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <CustNavbar />
      <div className="m-10 ">
        <div className="m-10 border rounded-xl pt-5 pb-5 flex justify-between hover:shadow-md">
          <li className="flex flex-col ">
            <h3 className="ml-10 font-bold text-2xl">{prodId.name}</h3>
            <p className="ml-10 ">Highest Bid: {prodId.price}</p>
            <p className="ml-10 ">Quantity: {prodId.quantity}</p>
            <p className="ml-10 ">Seller ID: {prodId.sellerId}</p>
            <p className="ml-10 ">ID: {prodId._id}</p>
            {prodId.open && (
              <div>
                <input type="number" name="price" placeholder="Place your bid" value={bidState.price}
        onChange={handleChange}>
        </input>
                <button onClick={placeBid} type="submit">
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
