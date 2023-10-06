import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginUser() {
    const navigate = useNavigate()
    const [UserName,setUserName] = useState("")
    const [Password,setPassword] = useState("")

  return (
    <div>
        <h1>LoginUser</h1>
        <form action="">
            <input type="text" placeholder='UserName' value={UserName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="text" placeholder='Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
            <div className='btn'>
                <button onClick={()=>{navigate("/UserSignup")}}>SignUp</button>
                <button>Submit</button>

            </div>

        </form>
    </div>
  )
}

export default LoginUser