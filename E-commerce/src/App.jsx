import {BrowserRouter,
  Routes,
  Route,
  
 } from 'react-router-dom'
 import 'remixicon/fonts/remixicon.css'
 import 'animate.css';
 import NotFound from './component/NotFound'
 import Product from './component/Admin/Product'
 import Order from './component/Admin/Orders'
 import Dashboard from './component/Admin/Dashboard'
 import Payment from './component/Admin/Payments'
 import Setting from './component/Admin/Setting'
 import Customer from './component/Admin/Customer'
 import Admin from './component/Admin'
 import Home from './component/Home'
 import Products from './component/Products'
 import Category from './component/Category'
 import Login from './component/Login'
 import Signup from './component/Signup'
 import Contact from './component/Contact'
 import PreGaurd from './component/Gaurd/PreGaurd'
 import Cart from './component/Cart'
 import Profile from './component/Profile'
const App=()=>{
  return(
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>

      <Route element={<PreGaurd/>}>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      </Route>

      <Route path='contact-us' element={<Contact/>}/>
      <Route path='/admin'>
      <Route path='product' element={<Product/>}/>
      <Route path='order' element={<Order/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='payment' element={<Payment/>}/>
      <Route path='setting' element={<Setting/>}/>
      <Route path='customer' element={<Customer/>}/>
      <Route path='auth' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
    
  )
}
export default App