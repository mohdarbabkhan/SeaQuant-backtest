import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from "react-google-login"
const Login = () => {
    const googleID = 'o0280283.apps.googleusercontent.com'
    const navigate = useNavigate()
    const [formdata,setformdata] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
        console.log(formdata);
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(formdata.email && formdata.password){
            const res = await axios.post('http://localhost:8000/user/signin',formdata)
            console.log(res.data);
            navigate('/strategy')   
        }
    }
    const googleSuccess = () =>{}
    const googleFaliure = () =>{}
  return (
    <div>
        <h1>Login</h1>
        <p>Welcome Back!!</p>
        <form action='post' onSubmit={handleSubmit}>
            <input type='text' name='email' 
            value={formdata.email} placeholder='Email' onChange={handleChange} />

            <input type='text' name='password'
            value={formdata.password} placeholder='password' onChange={handleChange} />
            <button>Login</button>
        </form>
        <GoogleLogin
            clientId={googleID}
            render={(renderProps) => (
              <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              >
              SignIn with Google
            </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFaliure}
            cookiePolicy="single_host_origin"
          />
    </div>
  )
}

export default Login