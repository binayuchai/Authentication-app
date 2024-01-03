import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Login() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const handleSubmit =async()=>{
    try{
      const response = await axios.post("http://localhost:8000/api/login/",{email:email,password:password},
      {headers: 
      {'Content-Type': 'application/json'}});
      console.log("Sign in successful", response.data)
      //Initializer the access and refresh token in localstorage
      localStorage.clear();
      console.log("Data is : ",response)
      console.log("Data is : ",response.data.token['access'])
      console.log("Data is : ",response.data.msg)

      localStorage.setItem('access_token',response.data.token['access'])
      localStorage.setItem('refresh_token',response.data.token['refresh'])
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token['access']}`;
      

      

      window.location.href = '/home/'



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
  <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>

<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
