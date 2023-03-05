import express from "express"
import { signin, signup } from "../controller/sellerAuth.js";
import { productAdd, productDisp } from "../controller/product.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/add-product", productAdd);
router.post("/disp-product", productDisp);

export default router;