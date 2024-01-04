import React,{useState}from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [cpassword,setCPassword] = useState('')
  const { uid, token } = useParams();
  const submitForm = async(e)=>{
    e.preventDefault();
    console.log("submited");
    console.log(password + " " + cpassword)


    try{
      const response = await axios.post(`http://localhost:8000/api/reset-password/${uid}/${token}/`,{password:password,password2:cpassword},{
        headers:{
          'Content-Type':'application/json',
        }
      })
      
      
      console.log("change password successful", response)
      window.location.href = '/login/'


    }catch(e){
      console.log("Error during change password",e)

    }

  }
  return (
    <>
    <div>ResetPassword</div>
     <div className="container">
    
    
    
    <form onSubmit={submitForm}>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="password"/>
  </div>
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
  <input type="password" class="form-control" value={cpassword} onChange={(e)=>setCPassword(e.target.value)} id="cpassword"/>
</div>
<div className="mb-3">
<button className="btn btn-success" type="submit">confirm</button>
</div>
    </form>
    </div>
    
    </>
    
  )
}
