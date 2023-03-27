import React from 'react'
import CustNavbar from './CustNavbar'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const [prod, setProd] = useState([]);
    //console.log(props);
    //const id = props.productID;
    const id = "6404ce298ef4c9317412a982"
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:5002/customer/products/${id}`)
        .then(response => {
          console.log(response.data);
          setProd(response.data);
          //console.log(product);
        })
        .catch(error => {
          console.log(error);
        })
      },[])
  return (
    <>
    <CustNavbar/>
    <div className='m-10 ' >
          {prod.map((product,index) => (
          <div className='m-10 border rounded-xl pt-5 pb-5 flex justify-between hover:shadow-md'> 
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

export default Product
