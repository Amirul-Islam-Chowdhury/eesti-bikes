
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductList from './pages/ProductList'
import Productinfo from './pages/Productinfo';
import Cart from './pages/Cart'



import './style/layout.css'
import './style/home.css'
import './style/signup.css'
import './style/product.css'
import "./style/banner.css"


import {Route, BrowserRouter, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/productList' exact element={<ProductList/>}/>
        <Route path='/productinfo/:productid' exact element={<Productinfo/>}/>
        <Route path='/cart' exact element={<Cart/>}/>

      </Routes>
     </BrowserRouter>


     

      
      
    </div>
  );
}

export default App;
