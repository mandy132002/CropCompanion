import seller from "../models/seller.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const secret = 'test';

export const signin = async (req, res) => {
    const {email, password ,role } = req.body;

    try{
        const oldUser = await seller.findOne({email});

        if(!oldUser) return res.status(404).json({ message: "Seller does not exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" });

        // const isIDCorrect = await bcrypt.compare(seller_id, oldUser.seller_id);

        // if(!isIDCorrect) return res.status(400).json({ message: "Invalid hospital ID" });

        const token = jwt.sign({ email: oldUser.email, role:oldUser.role, id: oldUser._id}, secret, { expiresIn: "1h" });

        res.status(200).json({oldUser, token});
    } catch (err) {
        res.status(500).json({message: "Something went wrong"});
    }
};

export const signup = async (req,res) => {
    const { email, password, name, role } = req.body;
    console.log(req.body);
    try{
        console.log('Hi');
        const oldUser = await seller.findOne({email});
        
        if(oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await seller.create({ role, email, password: hashedPassword, name}); 
        
        const token = jwt.sign({ email: result.email,role: result.role, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

// Backend API route for logout
export const logout = async (req, res) => {
    try {
      // Clear the session token from the client-side
      res.clearCookie('token');
  
      // Send a success response
      res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };
  