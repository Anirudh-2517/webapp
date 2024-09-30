import './App.css';
import Product from './components/Product.js';
import Login from './components/Login.js';
import AddProduct from './components/AddProduct.js';
import { useState } from 'react';
import Cart from './components/Cart.js';

function App() {
  const [loginStatus,setloginStatus]=useState(false)
  const [cart,setCart]=useState([])
  const [userType,setuserType]=useState("")

  return (
    <div className="App">
      {loginStatus===false?<Login setloginStatus={setloginStatus} setuserType={setuserType}/>
      :userType==="Admin"?<AddProduct></AddProduct>
      : <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
          <Product cart={cart} setCart={setCart}/><Cart setcart={setCart} cart={cart} />
        </div>}
    </div>
  );
}

export default App;