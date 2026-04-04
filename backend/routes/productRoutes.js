import express from "express";
import Product from "../model/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
const router = express.Router();

// GET all products
router.get("/", asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error('BROKEN')
  res.json(products);
}));

// GET single product by ID
router.get("/:id", asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {        
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}));

export default router;