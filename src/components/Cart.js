import React, { useEffect } from 'react'
import { useState } from 'react'

function Cart({cart,setcart}) {
  const[allProducts, setallProducts]= useState([])

  const increment=(cartItem)=>
    {
    cart.map(c=>c.pid==cartItem.pid?c.qtty++:"nothing")
    setcart([...cart])
  }
  const decrement=(cartItem)=>
    {
      if(cartItem.qtty>0){
        cart.map(c=>c.pid==cartItem.pid?c.qtty--:"nothing")
        setcart([...cart])
      }
  }
  const deletecart=(cartItem)=>{
    const rempro=cart.filter(p=>p.pid!==cartItem.pid)
    setcart(rempro)
  }
  useEffect(()=>{},[cart])
  return (
    <div>
      <h1 style={{color:'red'}}>Cart</h1>
      <ul style={{listStyle:'none'}} className='list-group'>
        {cart.map(cartItem=><li className='list-group-item m-1'>
          <span style={{display:'inline-block' ,width:'100px'}}>{cartItem.pid}</span>
          <span style={{display:'inline-block' ,width:'100px'}}>{cartItem.pname}</span>
          <span style={{display:'inline-block' ,width:'150px'}}><img src={cartItem.imageUrl} width='100px' height='100px'></img></span>
          <span style={{display:'inline-block' ,width:'100px'}}>{cartItem.price}*{cartItem.qtty}={(cartItem.price*cartItem.qtty)}</span>
          <span style={{display:'inline-block' ,width:'100px'}}>
            <button className='btn btn-warning m-1' onClick={()=>increment(cartItem)}>+</button></span>
          <span style={{display:'inline-block' ,width:'100px'}}>
            <button className='btn btn-success m-1' onClick={()=>decrement(cartItem)}>-</button></span>
            <span style={{display:'inline-block' ,width:'100px'}}>
              <button className='btn btn-success m-1' onClick={()=>deletecart(cartItem)}>Del</button>
            </span>
          </li>)}
        </ul>
    </div>
  )
}

export default Cart