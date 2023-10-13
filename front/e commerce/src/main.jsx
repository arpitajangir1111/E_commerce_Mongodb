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
import AddProduct from '../AddProduct.jsx'
import Allproducts from './AllProducts.jsx'
import'./Header.css'
import './Userlogin.css'
import './Allproduct.css'
import './EditProduct.jsx'
import './Edit.css'
import EditProduct from './EditProduct.jsx'

// import './index.css'


 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/userLogin' element={<LoginUser/>}/>
    <Route path='/AdminLogin' element={<AdminLogin/>}/>
    <Route path='/UserSignup' element={<UserSignup/>}/>
      <Route path='/AdminSignup' element={<AdminSignup/>}/>
      <Route path='/AddProduct'  element={<AddProduct/>}/>
      <Route path = '/AllProducts' element={<Allproducts/>}/>
      <Route path = '/edit/:id' element = {<EditProduct/>}/>
    

  </Routes>
  </BrowserRouter>
)
