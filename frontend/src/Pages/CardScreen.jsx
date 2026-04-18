import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addtocart } from "../slices/cartSlices"

const CardScreen = () => {

const dispatch=useDispatch();
const {cartItem}= useSelector((state)=>state.cart)

console.log(cartItem);


 const addtocartHandler =(item,qty)=>{
  dispatch(addtocart({...item,qty}))
 }

  return (
      <div className="container mx-auto px-4 mt-4">
          <h1 className="text-5xl font-bold mb-10 text-center">
            MY CART
          </h1>

          {/* {cartItem.length === 0 ? (
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
                   <div className="d-flex">
                    {item.name}
                   </div>
                   <p>{item.qty}</p>
                   
                  </div>
                </div>
              ))}
            </div>
          ) 
        } */}
        {cartItem.length ===0 ? (
          <div className="alert alert-warning shadow-lg">
              <div>
                <span className="text-lg font-semibold">
                  There is no item here
                </span>
              </div>
          </div>
        ):
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="md:cols-span-1 space-y-5">
            {cartItem.map((item)=>(
              <div className="grid grid-cols-3 gap-5 items-center" key={item._id}>
                <div className="col-span-1">
                  <Link>
                  <img className="w-full h-[200px] object-cover rounded-md shadow-md" src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="col-span-2">
                  <div className="card bg-base-200 shadow-md">
                    <div className="card-body">
                      <h2 className="card-title text-lg font-bold text-primary mb-2">
                        {item.name}
                      </h2>
                      <p   className="text-gray mb-3"> 
                        Price: ${item.price}
                      </p>
                      {item.countInStock > 0 && (
                        <div>
                        <label htmlFor="quantity">
                          Qty:
                           </label>  
                           <select value={item.qty}
                             onChange={(e)=>
                              addtocartHandler(item,Number(e.target.value))
                              }>
                            {
                              [...Array(item.countInStock).keys()].map((x)=>(
                                <option key={x+1}>
                                  {x+1}
                                </option>
                              ))
                            }
                           </select>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        }    



      </div>


  )
}

export default CardScreen