import { Link,useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlices"
const Header = () => {

  const { cartItem }=useSelector((state)=>state.cart)
const { userInfo }=useSelector((state)=>state.auth)

const navigate=useNavigate()
const dispatch=useDispatch();

const [ LogoutApicall ]=useLogoutMutation();

const logoutHandler=async()=>{
  try{
    await LogoutApicall();
    navigate("/login")
  }catch{
  console.log(error)
  }
}
console.log(userInfo);


  return (
   <>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Ecom</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
<Link to="/card" className="badge badge-primary"><span>
    Cart Count: {cartItem ?.length || 0}
  </span>
</Link>   
   <li>
      {userInfo ? (
  <details>
          <summary>{userInfo.name}</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Light</a></li>
            <li><a>Profile</a></li>
            <li onClick={logoutHandler}><a>Logout</a></li>

          </ul>
        </details>
      )  : (
        <li><Link to="/login">SignIn</Link> </li>
      )}
      </li>
    </ul>
  </div>
</div>
   </>
  )
}

export default Header