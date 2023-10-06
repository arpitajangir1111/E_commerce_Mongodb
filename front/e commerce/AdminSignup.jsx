import React, { useState } from 'react'

function AdminSignup() {
    const [AdminName,setAdminName] = useState("")
    const [AdminEmail,setAdminEmail] = useState("")
    const [AdminUserName,setAdminUserName] = useState("")
    const [AdminPassword,setAdminPassword] = useState("")
  return (
    <div>
        <h1>AdminSignup</h1>
        <form action="">
            <input type="text" placeholder='Name' value={AdminName} />
            <input type="text" placeholder='Email' value={AdminEmail} />
            <input type="text" placeholder='UserName' value={AdminUserName} />
            <input type="text " placeholder='Password' value={AdminPassword} />
            <div className='btn'>
                <button>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default AdminSignup