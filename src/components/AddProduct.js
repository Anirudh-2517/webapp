import React, { useRef } from 'react'
import axios from 'axios'

function AddProduct() {
    const pid=useRef("")
    const pname=useRef("")
    const price=useRef("")
    const imageURl=useRef("")
    const addproduct=()=>
    {
        let pid1=pid.current.value
        let pname1=pname.current.value
        let price1=price.current.value
        let imageURl1=imageURl.current.value

        const payload=
        {
            pid:pid1,
            pname:pname1,
            price:price1,
            imageURl:imageURl1
        }
        axios.post("http://localhost:9022/api/Products/insertProduct",payload)
        .then(result=>{
            alert("inserted")
        })
        .catch(error=>{
            console.log(error)
            alert("duplicate")
        })
    }
  return (
    <div>
        <input ref={pid} type='text' placeholder='Enter product id'></input>
        <input ref={pname} type='text' placeholder='Enter product name'></input>
        <input ref={price} type='text' placeholder='Enter product price'></input>
        <input ref={imageURl} type='text' placeholder='Enter product imageURl'></input>
        <button onClick={addproduct}>Add Product</button>
    </div>
  )
}

export default AddProduct