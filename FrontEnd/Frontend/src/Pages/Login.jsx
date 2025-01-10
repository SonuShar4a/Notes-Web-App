import React, { useState } from "react"
import './Login.css'
import { post } from "../../../../BackEnd/Services/ApiEndPoint"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate()
  const [values,setvalues]=useState({
    email:"",
    password:""
  })

  const handelChange=(e)=>{
    setvalues({
      // email:e.target.email,
      // password:e.target.password
      ...values,
      [e.target.name]:e.target.value
    })
  }

  const handelSubmit=async(e)=>{
     
    e.preventDefault()
   try {
    const req=await post('/auth/login',values)
    const res=req.data
      
    if(res.success){
      toast.success(res.message)
      // console.lo("login"+res.success);
      navigate('/')
    }
    console.log(res)
   } catch (error) {
    console.log(error)
     toast.error(error.response.data.message)
   }
  }
    return (
      <>
      <div id="container"> 
       <div className="login-container">
        <form className="login-form" onSubmit={handelSubmit}>
            <h2>Login</h2>
            <div className="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={values.email} onChange={handelChange} placeholder="Enter Your Email" required/>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value={values.password} onChange={handelChange}  placeholder="Enter Your Password" required/>
            </div>
            <button type="submit" class="login-btn">Login</button>
            <p className="register-link">Don't have an account? <Link to={'/register'}>Register</Link> </p>
        </form>
    </div>
    </div>
      </>
    )
  }
  export default Login