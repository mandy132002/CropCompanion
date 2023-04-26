import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const SoldProduct = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProduct();
      }, []);
      
    const getAllProduct = () => {
        axios
          .get('http://localhost:5002/seller/disp-product')
          .then((response) => {
            setProducts(response.data.products);
            console.log(products);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const user = JSON.parse(localStorage.getItem('profile'));
    const parts = user.split('.');
    const payload = JSON.parse(atob(parts[1]));
     const filteredProducts = products.filter(
        (product) => (product.sellerId === payload.email) && (product.sold === true)
     );
    
  return (
    <>
    <Navbar />
    <div className="m-10  flex ">
        {/* {products} */}
        {filteredProducts.map((product, index) => (
            <div className="m-10 border rounded-xl pt-5 pb-5 flex flex-col w-60 shadow-xl">
            <li key={index} className="flex flex-col ">
              <h3 className="mx-auto font-bold text-2xl">{product.name}</h3>
              <p className="mx-auto ">Final Product Price: {product.price}</p>
              {product.bidderName !== 'x' && (
                  <p className="mx-auto ">
                  Buyer: {product.bidderName}
                </p>
              )}
              <p className="mx-auto">Quantity: {product.quantity}</p>
              <p className="mx-auto ">Seller ID: {product.sellerId}</p>
              <img className="mx-auto p-4" width={150} src={product.image} alt="" />

              {/* <p>{product._id}</p> */}
            </li>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default SoldProduct