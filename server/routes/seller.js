import express from "express"
import { signin, signup } from "../controller/sellerAuth.js";
import { productAdd, productDisp,updateProduct, deleteProduct } from "../controller/product.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/add-product", productAdd);
router.get("/disp-product", productDisp);
router.patch("/stop-bid/:id",updateProduct);
router.delete("/delete-product/:id", deleteProduct);

export default router;