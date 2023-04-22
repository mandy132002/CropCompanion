import product from '../models/product.js';
//import { ObjectId } from "mongoose";
import mongoose from 'mongoose';

//const ObjectId = mongoose.Types.ObjectId;

export const productAdd = async (req, res) => {
  const { name, price, quantity, sellerId } = req.body;
  try {
    const result = await product.create({ name, price, quantity, sellerId });

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);
  }
};

export const productDisp = async (req, res) => {
  //const {userId} = req.params;
  try {
    const products = await product.find();
    res.status(200).json({ products });
    console.log(products);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;

    const updatedProduct = await product
      .findByIdAndUpdate(productId, updatedData, { new: true })
      .then((updatedProduct) => {
        
        if (updatedProduct) {
          console.log('Product updated:', updatedProduct);
          res.status(200).json(updatedProduct);
        } else {
          res
            .status(404)
            .json({ message: `Product with ID ${productId} not found.` });
        }
      });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
export const productBid = async (req, res) => {
  //const {id} = req.params;
  try {
    // const products = await product.findById(id);
    // res.status(200).json({ prod });
    // console.log(products);
    const products = await product.find();
    console.log(products);
    console.log(req.params.id);
    const isValid = /^[0-9a-fA-F]{24}$/.test(req.params.id);
    if (!isValid) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const prod = products.filter((product1) =>
      product1._id.equals(new mongoose.Types.ObjectId(req.params.id))
    );
    // const prod = products.filter((product1)=> product1._id===req.params.id);
    res.status(200).json({ prod });
    console.log(prod);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);
  }
};


//delet product function.
export const deleteProduct = async(req, res) => {
    try{
      const {id} = req.params;
      const deletep = await product.findByIdAndDelete({_id:id})
      console.log(deletep);
      res.status(201).json(deletep);

    }
    catch(err){
      res.status(422).json(err)
    }
}
// 6404ce298ef4c9317412a982
