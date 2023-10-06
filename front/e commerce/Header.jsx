import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>


        <Link to='/'>Home</Link>
        <Link to = '/LoginUser'>Login</Link>
        <Link to = '/AdminLogin'>AdminLogin</Link>

    </div>
  )
}

export default Header