import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Login() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const handleSubmit =async()=>{
    console.log("Email: " + email + "password: " +password)
    try{
      const response = await axios.post("http://localhost:8000/api/login/",{email:email,password:password})
      console.log("Sign in successful", response.data)



    }
    catch(error){
      console.log("Error occured during sign in",error.response.data)
    }


   }
   
  return (
    <>
    <div className="container">
    <div>Login</div>
    <form>
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <Link to={"#"}>Forgot password?</Link>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to={"/register/"}>Register</Link></p>

  </div>
</form>




    </div>
        
    
    </>
  )
}
