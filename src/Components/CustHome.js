import React from 'react'
import CustNavbar from './CustNavbar'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Product from './Product';
import useStore from '../store/store';


export default function CustHome() {
    const [products, setProducts] = useState([]);
    const prodId = useStore((state)=> state.productId)
    const setId = useStore((state)=>state.setId)
    console.log(prodId);


  useEffect(() => {
    axios.get('http://localhost:5002/customer/products')
    .then(response => {
      setProducts(response.data.products);
      console.log(products);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  return (
    <>
    <CustNavbar/>
    <div className='m-10 ' >
          {products.map((product,index) => (
          <div className='m-10 border rounded-xl pt-5 pb-5 flex justify-between hover:shadow-md' onClick={()=>{setId(product)}}> 
          <li key={index} className="flex flex-col ">
            <Link to={`/customer/${product._id}`}>
            <h3 className='ml-10 font-bold text-2xl'>{product.name}</h3>
            <p className='ml-10 '>Price: {product.price}</p>
            <p className='ml-10 '>Quantity: {product.quantity}</p>
            <p className='ml-10 '>Seller ID: {product.sellerId}</p>
            <p className='ml-10 '>ID: {product._id}</p>
            </Link>
          </li>
          </div>
        ))}
    </div>
    
    
    </>
  )
}
