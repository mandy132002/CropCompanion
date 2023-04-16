import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useStore } from 'zustand';

const Home = () => {
  const [products, setProducts] = useState([]);
  // const setId = useStore((state)=>state.setId);

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

   const stopBidding= (product) => {
    console.log(product);
    const productId = product._id
    const data={
      open:false
    }
    axios.patch(`http://localhost:5002/seller/stop-bid/${productId}`,data)
    .then(response=>{
      console.log('Product updated:', response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const user = JSON.parse(localStorage.getItem('profile'));
  const parts = user.split('.');
  const payload = JSON.parse(atob(parts[1]));
  const filteredProducts = products.filter(product => product.sellerId === payload.email)

  return (
    <>
    <Navbar/>
    <div className='m-10 '>
      {/* {products} */}
          {filteredProducts.map((product,index) => (
          <div className='m-10 border rounded-xl pt-5 pb-5 flex  hover:shadow-md'> 
          <li key={index} className="flex flex-col ">
            <h3 className='ml-10 font-bold text-2xl'>{product.name}</h3>
            <p className='ml-10 '>Price: {product.price}</p>
            <p className='ml-10 '>Quantity: {product.quantity}</p>
            <p className='ml-10 '>Seller ID: {product.sellerId}</p>
            <p>{product._id}</p>
          </li>

          <button onClick={()=> stopBidding(product) } type="submit" className='h-10 w-40 mr-10 my-auto bg-red-300 rounded-md hover:shadow-md'>Stop Bidding</button>
          <button type="submit" className='h-10 w-40 mr-10 my-auto bg-red-300 rounded-md hover:shadow-md'>Delete</button>
          </div>
        ))}
    </div>
    </>
  )
};

export default Home;
