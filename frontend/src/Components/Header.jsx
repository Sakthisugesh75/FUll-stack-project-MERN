import { Link } from "react-router-dom"
const Header = () => {
  return (
   <>
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Ecom</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
<Link to="/card" className="badge badge-primary">Label</Link>      <li>
        <details>
          <summary>Jagan</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Light</a></li>
            <li><a>Profile</a></li>
            <li><a>Logout</a></li>

          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
   </>
  )
}

export default Header