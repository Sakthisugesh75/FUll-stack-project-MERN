import { useParams, Link } from "react-router-dom"
import {useGetProductsdetailsQuery} from "../slices/productApiSlices"
import Rating from "../Components/Rating";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addtocart } from "../slices/cartSlices";
// import { useEffect, useState } from "react";
// import axios from "axios"
const ProductScreen = () => {
 // const [product,setProduct]=useState({});
// useEffect(()=>{
//   const fetchProduct=async ()=>{
//     const {data}= await axios.get(`http://localhost:5000/api/products/${productid}`)
//     setProduct(data)
//   }
//   fetchProduct()
// },[productid])
 const { id: productid } = useParams();
 const [qty,setQty]=useState(1);
 const dispatch=useDispatch();

  const {data:product, error, isLoading} = useGetProductsdetailsQuery(productid)

  const addtocarthandler=()=>{
    dispatch(addtocart({...product,qty}))
  }



  if(isLoading) return <p> Loading</p>
  if (error) return <p>Error:{error.message}</p>


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

       <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="line-clamp-2 mb-5">
           {product.description}
          </p>
          <div>
            <Rating value={product.rating} text={product.numReviews}/>
          </div>
          <h3 className="card-title badge badge-primary">
            {product.price}
          </h3>
         <p>{product.countInStock > 0 ? "Instocks" : "Out of stocks"}</p>
        </div>
      </div>

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
              <select className="select select-primary w-full max-w-xs" onChange={(e)=> setQty(Number(e.target.value))}>
                {[...Array(product.countInStock).keys()].map((item) => (
                  <option key={item + 1}>{item + 1}</option>
                ))}
              </select>
            </div>
          )}
          <div className="card-action mt-6">
            <button onClick={addtocarthandler }
            disabled={product.countInStock === 0}
            className="btn btn-primary w-full max-w-xs mt-2">Add to Cart

            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductScreen;