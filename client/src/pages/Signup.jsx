import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {GoogleLogin} from "react-google-login"
const Signup = () => {
    const navigate = useNavigate()
    const googleID = 'o0280283.apps.googleusercontent.com'
    const [form,setform] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setform({...form,[e.target.name]:e.target.value})
        console.log(form);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(form.email && form.password  && form.firstname && form.lastname){
            const res = await axios.post('http://localhost:8000/user/signup',form)
            console.log(res.data);
            navigate("/strategy")
    }
    }
    const googleSuccess = () =>{}
    const googleFaliure = () =>{}
  return (
    <div>
        <h1>Sign Up</h1>
        <p>Start Your Journey!!</p>
        <form action='post' onSubmit={handleSubmit}>
            <input type='text' name='firstname' 
            value={form.firstname} placeholder='first name' onChange={handleChange} />

            <input type='text' name='lastname' 
            value={form.lastname} placeholder='Last name' onChange={handleChange} />

            <input type='text' name='email' 
            value={form.email} placeholder='Email' onChange={handleChange} />

            <input type='text' name='password'
            value={form.password} placeholder='password' onChange={handleChange} />
            <button>Sign Up</button>
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

export default Signup