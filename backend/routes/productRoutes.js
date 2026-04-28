import express from "express";
import {getProducts,getProductsById} from "../controllers/productController.js"
const router = express.Router();

// GET all products
router.route("/").get(getProducts)

// GET single product by ID
router.route("/:id").get(getProductsById)

export default router;