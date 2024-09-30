import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product({cart,setCart}) {
  const [allProducts,setallProducts]=useState([])
  const addToCart=(product)=>{
    setCart([...cart,product])///(... is set operator)
  }
  useEffect(()=>{
    axios.get("http://localhost:9022/api/Products/getallProducts")
    .then(response=>{
      setallProducts(response.data)
    })
  })
  return (
    <div>
      <h1 style={{color:'red'}}>Products</h1>
      <ul style={{listStyle:'none'}} className='list-group'>
      {allProducts.map(products=><li className='list-group-item m-1'>
      <span style={{display:'inline-block',width:'100px'}}>{products.pid}</span>
      <span style={{display:'inline-block',width:'150px'}}>{products.pname}</span>
      <span style={{display:'inline-block',width:'150px'}}><img  src={products.imageUrl} width='100px' height='100px'></img></span>
      <span style={{display:'inline-block',width:'100px'}}>{products.price}</span>
      <button className='btn btn-primary m-1' onClick={()=>addToCart(products)}>Add To Cart</button></li>)}
      </ul>
    </div>
  )
}

export default Product