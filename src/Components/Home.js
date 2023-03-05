import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/seller/disp-product')
    .then(response => {
      setProducts(response.data.products);
      console.log(products);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  const user = JSON.parse(localStorage.getItem('profile'));
  const parts = user.split('.');
  const payload = JSON.parse(atob(parts[1]));
  const filteredProducts = products.filter(product => product.sellerId === payload.email)

  return (
    <>
    <Navbar/>
    <div>
      {/* {products} */}
          {filteredProducts.map((product,index) => (
          <div>
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Seller ID: {product.sellerId}</p>
          </li>
          </div>
        ))}
    </div>
    </>
  )
};

export default Home;
