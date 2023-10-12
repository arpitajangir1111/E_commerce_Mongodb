import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../Home.jsx'
import AdminLogin from '../AdminLogin.jsx'
import LoginUser from '../LoginUser.jsx'
import Header from '../Header.jsx'
import UserSignup from '../UserSignup.jsx'
import AdminSignup from '../AdminSignup.jsx'

// import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/LoginUser' element={<LoginUser/>}/>
    <Route path='/AdminLogin' element={<AdminLogin/>}/>
    <Route path='/UserSignup' element={<UserSignup/>}/>
      <Route path='/AdminSignup' element={<AdminSignup/>}/>
    

  </Routes>
  </BrowserRouter>
)
