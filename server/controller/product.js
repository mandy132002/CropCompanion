import product from "../models/product.js";

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
