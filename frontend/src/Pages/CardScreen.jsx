import { useDispatch, useSelector } from "react-redux"

const CardScreen = () => {

const dispatch=useDispatch();
const {cartItem}= useSelector((state)=>state.cart)
const navigate =useNavigate();

console.log(cartItem);


 const addtocartHandler =(item,qty)=>{
  dispatch(addtocart({...item,qty}))
 }

const removeFromCartHandler =(id)=> {
  dispatch(removeFromCart(id));
}
const checkOutHandler =()=>{
  
  navigate("/login?redirect=/shipping")
}
  return (
      <div className="container mx-auto px-4 mt-4">
          <h1 className="text-5xl font-bold mb-10 text-center">
            MY CART
          </h1>
          
      </div>


  )
}

export default CardScreen