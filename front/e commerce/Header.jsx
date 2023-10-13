import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import '../Header.css'

function Header() {
  const adminAuth = localStorage.getItem("adminData")
  const userAuth = localStorage.getItem("userData")
  const navigate = useNavigate()

  return (
    <div className='header'>
<header>
      <Link to="/">Home</Link>
      {
        adminAuth ?
          <>
            <Link to="/AllProducts">AllProduct</Link>
            <Link to="/AddProduct">Add Product</Link>
            <Link to="/edit">Edit Product</Link>

          </> : ""
      }
      {
        userAuth ?
          <>
            <Link to="/allUserProducts">All Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
          </> : ""

      }

      {
        // {(JSON.parse(adminAuth).name) || (JSON.parse(userAuth).name)}
        userAuth || adminAuth ?
          <Link to="/" onClick={() => { localStorage.clear(); navigate("/") }}>Logout <span id='loggername'>&#40; {adminAuth ? JSON.parse(adminAuth).name : ""}{userAuth ? JSON.parse(userAuth).name : ""} &#41;</span> </Link>
          :
          <>
            <Link to="/userLogin">Login</Link>
            <Link to="/adminlogin" >Admin Login</Link>
          </>
      }

    </header>
    </div>
  )
}

export default Header