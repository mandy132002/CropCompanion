import React from 'react'
import CustNavbar from './CustNavbar';
import useStore from '../store/store';
const Product = () => {
    const prodId = useStore((state)=> state.productId);
    console.log(prodId.name);
  return (
    <>
    <CustNavbar/>
    <div className='m-10 ' >
          <div className='m-10 border rounded-xl pt-5 pb-5 flex justify-between hover:shadow-md'> 
          <li className="flex flex-col ">
            
            <h3 className='ml-10 font-bold text-2xl'>{prodId.name}</h3>
            <p className='ml-10 '>Price: {prodId.price}</p>
            <p className='ml-10 '>Quantity: {prodId.quantity}</p>
            <p className='ml-10 '>Seller ID: {prodId.sellerId}</p>
            <p className='ml-10 '>ID: {prodId._id}</p>

            {prodId.open && <div>hello</div>}
          </li>
          </div>
        
    </div>


    </>
  )
}

export default Product
