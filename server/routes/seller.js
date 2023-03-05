import express from "express"
import { signin, signup } from "../controller/sellerAuth.js";
import { productAdd } from "../controller/product.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/add-product", productAdd);

export default router;