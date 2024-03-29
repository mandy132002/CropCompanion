import express from "express"
import { productDisp, updateProduct } from "../controller/product.js";
import { signin, signup } from "../controller/customerAuth.js";
import { productBid } from "../controller/product.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/products",productDisp);
router.get("/products/:id",productBid);
router.patch("/place-bid/:id",updateProduct);

export default router;