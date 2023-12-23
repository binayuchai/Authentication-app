import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Login() {
   const [email,setEmail] = useState('')

   const handleSubmit =async()=>{
    try{
      const response = await axios.post("http://localhost:8000/api/login/",{email:email})
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



  <div className="row mb-4">


    <div className="col">
      <Link to={"/reset-password/"}>Forgot password?</Link>
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
