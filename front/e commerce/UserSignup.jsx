import React, { useState } from 'react'

function UserSignup() {

    const [Name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Username,setUsername] = useState("")
    const [Password ,setPassword] = useState("")
  return (
    <div>
        <h1>UserSignup</h1>
        <form action="">
            <input type="text" placeholder='Name' value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" placeholder='Username' value={Username} onChange={(e)=>{setUsername(e.target.value)}} />
            <input type="text" placeholder='Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
<div className='Sbtn'>
    <button>Signup</button>
</div>



        </form>
    </div>
  )
}

export default UserSignup