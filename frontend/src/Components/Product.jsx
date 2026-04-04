import Rating from "./Rating"
import { Link } from "react-router-dom"
const Product = ({ product }) => {
  return (
   <Link to={`/product/${product._id}`}>
 <div>
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
    </div>


   </Link>
  );
};

export default Product;
