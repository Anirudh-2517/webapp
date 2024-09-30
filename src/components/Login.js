import React, { useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../myStyles/login.css'

function Login({setloginStatus,setuserType}) 
{
    const username=useRef("")
    const pwd=useRef("")
    const authenticate=()=>
      {
        if (username.current.value=="abc" && pwd.current.value=="abc")
          {
            alert("Welcome Anirudh!!!")
            setloginStatus(true)
          }
        else if(username.current.value==="Admin" && pwd.current.value==="abc"){
          setuserType("Admin")
          setloginStatus(true)}
        else
            alert("Invalid!!")
      }
  return 
  (
    <div className='box1'>
        <input className='form-control w-50 m-3' type='text' ref={username} placeholder='Enter your username'></input>
        <input className='form-control w-50 m-3' type='password' ref={pwd} placeholder='Enter your password'></input>
        <button className='btn btn-primary m-3' onClick={authenticate}>Login</button>
    </div>
  )
}

export default Login