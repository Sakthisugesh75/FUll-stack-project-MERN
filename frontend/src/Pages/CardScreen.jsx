import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addtocart, removeFromCart } from "../slices/cartSlices"; // ✅ added

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart); // ✅ plural
  const navigate = useNavigate();

  const addtocartHandler = (item, qty) => {
    dispatch(addtocart({ ...item, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-5xl font-bold mb-10 text-center">Our CART</h1> {/* ✅ closed here */}

      {cartItem.length === 0 ? (
        <div className="alert alert-warning shadow-lg">
          <span className="text-lg font-semibold">There is no item in the cart</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="md:col-span-1 space-y-5">
            {cartItem.map((item) => (
              <div className="grid grid-cols-3 gap-5 items-center" key={item._id}>
                <div className="col-span-1">
                  <Link to={`/product/${item._id}`}> {/* ✅ to prop added */}
                    <img
                      className="w-full h-[200px] object-cover rounded-md shadow-md"
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>
                </div>
                <div className="col-span-2">
                  <div className="card bg-base-200 shadow-md">
                    <div className="card-body">
                      <h2 className="card-title text-lg font-bold text-primary mb-2">
                        {item.name}
                      </h2>
                      <p className="text-gray mb-3">Price: ${item.price}</p>

                      {item.countInStock > 0 && (
                        <div className="flex gap-2 items-center">
                          <label htmlFor="quantity">Qty</label>
                          <select
                            value={item.qty}
                            onChange={(e) => addtocartHandler(item, Number(e.target.value))}
                            className="select select-bordered" // ✅ typo fixed
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      <button
                        className="btn btn-error ml-auto btn-circle"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-1">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-secondary mb-3"> {/* ✅ typo fixed */}
                  Subtotal: $
                  {cartItem// ✅ now shows price total
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h2>
                <button className="btn btn-success btn-block" onClick={checkOutHandler}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;