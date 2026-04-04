import { useParams, Link } from "react-router-dom"

import Rating from "../Components/Rating";
import { useEffect, useState } from "react";
import axios from "axios"
const ProductScreen = () => {
  const { id: productid } = useParams();
const [product,setProduct]=useState({});

useEffect(()=>{
  const fetchProduct=async ()=>{
    const {data}= await axios.get(`http://localhost:5000/api/products/${productid}`)
    setProduct(data)
  }
  fetchProduct()
},[productid])



  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-500">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* Back Button */}
      <Link to="/">
        <button className="btn btn-neutral btn-sm mb-6">← Go Back</button>
      </Link>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Product Image */}
        <div className="flex justify-center">
          <figure>
          <img
            className="w-full max-w-md rounded-xl object-cover shadow-md"
            src={product.image}
            alt={product.name}
          />
          </figure>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

          <div>
            <Rating value={product.rating} text={product.numReviews} />
          </div>

          <p className="text-2xl font-semibold text-primary">${product.price}</p>

          <p className={`font-medium ${product.countInStock > 0 ? "text-success" : "text-error"}`}>
            {product.countInStock > 0 ? "✔ In Stock" : "✘ Out of Stock"}
          </p>

          {product.countInStock > 0 && (
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm uppercase tracking-wide">Quantity</label>
              <select className="select select-primary w-full max-w-xs">
                {[...Array(product.countInStock).keys()].map((item) => (
                  <option key={item + 1}>{item + 1}</option>
                ))}
              </select>
            </div>
          )}

          <button className="btn btn-primary w-full max-w-xs mt-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;