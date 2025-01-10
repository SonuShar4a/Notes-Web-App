import React, { useState } from "react"
import { Link, useNavigate,} from "react-router-dom";
import './Login.css'
import { post } from "../../../../BackEnd/Services/ApiEndPoint";
import toast from "react-hot-toast";
function Register() {
  const navigate=useNavigate()
  const [value, setvalue] = useState({
    userName: "",
    email: "",
    password: ""
  })

  const handelChange = (e) => {
    setvalue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handelSubmit = async (e) => {
    
    e.preventDefault()
    try {
      const req = await post('/auth/register', value)
      const res = req.data
      if(res.success){
        toast.success(res.message)
        navigate('/login')
      }
      console.log(res)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
    <div id='container'> 
      <div className="login-container">
        <form className="login-form" onSubmit={handelSubmit}>
          <h2>Register</h2>
          <div className="input-group">
            <label for="email">Name</label>
            <input type="name" id="name" name="userName" value={value.userName} onChange={handelChange} placeholder="Enter Your Name" required />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={value.email} onChange={handelChange} placeholder="Enter Your Email" required />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" value={value.password} onChange={handelChange} placeholder="Enter Your Password" required />
          </div>
          <button type="submit" class="login-btn">Register</button>
          <p className="register-link">Already have an account  <Link to={'/login'}>Login</Link>  </p>
        </form>
      </div>
      </div>
    </>
  )
}
export default Register