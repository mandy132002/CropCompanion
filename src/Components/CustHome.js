import React from 'react';
import CustNavbar from './CustNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Product from './Product';
import useStore from '../store/store';

export default function CustHome() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const prodId = useStore((state) => state.productId);
  const setId = useStore((state) => state.setId);
  console.log(prodId);

  const fetchData = () => {
    axios
      .get(`http://localhost:5002/customer/products`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredProducts = products.filter((product) => product.sold === false);
  useEffect(fetchData, []);

  return (
    <>
      <CustNavbar />
      <div className="m-10 ">
        <input
          className="shadow-xl w-2/3 p-2 ml-10 border rounded-md border-black"
          type="text"
          placeholder="Search CropCompanion.in"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='m-10 grid grid-cols-1  lg:grid-cols-3 gap-4'>
          {filteredProducts
            .filter((val) => {
              if (query === '') {
                return val;
              } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
                return val;
              }
            })
            .map((product, index) => (
              <div
                className="m-10 border rounded-xl pt-5 pb-5   shadow-xl  "
                onClick={() => {
                  setId(product);
                }}
              >
                <li key={index} className="flex flex-col ">
                  <Link to={`/customer/${product._id}`}>
                    <h3 className="ml-10 font-bold text-2xl">{product.name}</h3>
                    <p className="ml-10 ">Price: {product.price}</p>
                    <p className="ml-10 ">Quantity: {product.quantity}</p>
                    <p className="ml-10 ">Seller ID: {product.sellerId}</p>
                    {/* <p className="ml-10 ">ID: {product._id}</p> */}
                    <img className='mx-auto m-2' width={150} src={product.image} alt="productImage" />
                  </Link>
                </li>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
