import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useStore } from 'zustand';

const Home = () => {
  const [products, setProducts] = useState([]);
  // const setId = useStore((state)=>state.setId);

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
  const stopBidding = (product) => {
    console.log(product);
    const productId = product._id;
    const data = {
      open: false,
    };
    axios
      .patch(`http://localhost:5002/seller/stop-bid/${productId}`, data)
      .then((response) => {
        console.log('Product updated:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getAllProduct();
  };
  const startBidding = (product) => {
    console.log(product);
    const productId = product._id;
    const data = {
      open: true,
    };
    axios
      .patch(`http://localhost:5002/seller/stop-bid/${productId}`, data)
      .then((response) => {
        console.log('Product updated:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getAllProduct();
  };

  const deleteProduct = async (id) => {
    const res = await fetch(
      `http://localhost:5002/seller/delete-product/${id}`,
      {
        method: 'DELETE',
        header: {
          'Content-Type': 'application/json',
        },
      }
    );

    const deletedData = await res.json();
    console.log(deletedData);

    console.log('User Deleted');

    getAllProduct();
  };
  const user = JSON.parse(localStorage.getItem('profile'));
  const parts = user.split('.');
  const payload = JSON.parse(atob(parts[1]));
  const filteredProducts = products.filter(
    (product) => product.sellerId === payload.email
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
              <p className="mx-auto ">Current highest bid: {product.price}</p>
              {product.bidderName !== 'x' && (
                <p className="mx-auto ">
                  Current highest bidder: {product.bidderName}
                </p>
              )}
              <p className="mx-auto">Quantity: {product.quantity}</p>
              <p className="mx-auto ">Seller ID: {product.sellerId}</p>
              <img className="mx-auto p-4" width={150} src={product.image} alt="" />

              {/* <p>{product._id}</p> */}
            </li>
            <div className='flex flex-col mx-auto '>
              {product.open && (
                <button
                  onClick={() => stopBidding(product)}
                  type="submit"
                  className="h-10  w-40 mt-2 mx-auto mb-2  bg-red-300 rounded-md hover:shadow-xl"
                >
                  Stop Bidding
                </button>
              )}

              {!product.open && (
                <button
                  onClick={() => startBidding(product)}
                  type="submit"
                  className="h-10 w-40 mt-2 mx-auto mb-2  bg-green-300 rounded-md hover:shadow-xl"
                >
                  Start Bidding
                </button>
              )}
              <button
                onClick={() => deleteProduct(product._id)}
                className="h-10 mt-2 mx-auto mb-2 w-40   bg-red-300 rounded-md hover:shadow-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
