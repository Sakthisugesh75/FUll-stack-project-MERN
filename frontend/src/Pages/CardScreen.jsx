import { useDispatch, useSelector } from "react-redux"

const CardScreen = () => {

const dispatch=useDispatch();
const {cartItem}= useSelector((state)=>state.cart)

console.log(cartItem);

  return (
      <div className="container mx-auto px-4 mt-4">
          <h1 className="text-5xl font-bold mb-10 text-center">
            MY CART
          </h1>
          
      </div>


  )
}

export default CardScreen