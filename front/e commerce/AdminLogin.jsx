import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const navigate = useNavigate()
    const [AdminUserName,SetAdminUserName] = useState("")
    const [AdminPassword,setAdminPassword] = useState("")


  return (
    <div>
        <h1>AdminLogin</h1>
        <form action="">
            <input type="text" placeholder='UserName' value={AdminUserName} onChange={(e)=>{SetAdminUserName(e.target.value)}} />
            <input type="text" placeholder='Password' value={AdminPassword} onChange={(e)=>{setAdminPassword(e.target.value)}} />
<div className='btns'>
    <button>Login</button>
    <button onClick={()=>{navigate("/AdminSignup")}}>SignUp</button>

</div>
        </form>

    </div>
  )
}

export default AdminLogin