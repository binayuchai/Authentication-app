import axios from 'axios';
import React, { useState } from 'react'

export default function ForgotPassword() {
  const [email,setEmail] = useState('');
  const submitForm = async(e)=>{
    e.preventDefault();
    console.log(email)
    try{


      const response = await axios.post('http://127.0.0.1:8000/api/send-reset-password/',{email:email},{
        headers:{
          'Content-Type':'application/json',
        }
      })
      console.log(response)
    }catch(e){
      console.log("Error during forgot password",e)
    }

  }
  return (
    <>
    <div className="container">
    <h3>Forgot Password</h3>
    <form onSubmit={submitForm}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="user_email" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" />
   </div>
   <div className="mb-3">
   <button className="btn btn-primary" type="submit">Submit</button>
   
   </div>
    
    </form>
    </div>
    
    </>
  )
}
