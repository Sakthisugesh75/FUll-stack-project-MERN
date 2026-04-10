import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
const CardScreen = () => {

const dispatch=useDispatch();
const {cartItem}= useSelector((state)=>state.cart)

console.log(cartItem);

  return (
      <div className="container mx-auto px-4 mt-4">
          <h1 className="text-5xl font-bold mb-10 text-center">
            MY CART
          </h1>

          {cartItem.length === 0 ? (
            <div className="alert alert-warning shadow-lg">
              <div>
                <span className="text -lg"> There is no data here</span></div>
            </div>
          ):(
            <div>
              {cartItem.map((item)=>(
                <div className="grid grid-cols-3 gap-5 items-center" key={item._id}>
                  <div className="col-span-1">
                    <Link>
                    <img src={item.image} alt={item.name}>
                    </img>
                    
                    </Link>
                    <div className="text-lg">{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          ) 
        }
      </div>


  )
}

export default CardScreen