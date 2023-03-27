import product from "../models/product.js";
import { ObjectId } from "mongoose";

export const productAdd = async (req, res) => {
    const {name, price ,quantity, sellerId } = req.body;
    try{
        const result = await product.create({name, price, quantity, sellerId});

        res.status(201).json({ result });
    }
    catch(error){
        res.status(500).json({ message: "Something went wrong" });
        console.log(error); 
    }
}

export const productDisp = async (req, res) => {
    //const {userId} = req.params;
    try {
        const products = await product.find();
        res.status(200).json({ products });
        console.log(products);
      }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
}

export const productBid = async(req,res) =>{
    try {
        const products = await product.find();
        console.log(products);
        const prod = products.filter((product1) => product1._id.equals(ObjectId(req.params.id)));
        // const prod = products.filter((product1)=> product1._id===req.params.id);
        res.status(200).json({ prod });
        console.log(prod);
      }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
}

// 6404ce298ef4c9317412a982