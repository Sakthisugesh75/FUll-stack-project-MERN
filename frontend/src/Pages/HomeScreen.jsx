// import products from "../products.js";
import axios from "axios"
import Product from "../Components/Product.jsx";
import { useEffect,useState } from "react";
const HomeScreen = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products")
    setProducts(data)   // ← must be inside the async function
  }
  fetchProducts()
}, [])

  return (

   <>
   <section className="max-w-7xl max-auto py-7">
      <h2 className="text-5xl my-10 ">
         All Products
      </h2>
   {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
 {
    products.map((product)=>(
             <Product key={product._id} product={product}/>        
           ))
 }
</div> */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
  {products.map((product) => (
    <Product key={product._id} product={product} />
  ))}
</div>
</section>
   </>

)

}

export default HomeScreen