import axios from 'axios';
import React,{useState} from 'react'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [cpassword,setCPassword] = useState('')
    const submitForm = async(e)=>{
      e.preventDefault();
      console.log("submited");
      console.log(password + " " + cpassword)
      const token = localStorage.getItem('access_token');

      try{
        const response = await axios.post("http://localhost:8000/api/change-password/",{password:password,password2:cpassword},{
         headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`,

         }
        },{withCredentials:true});
        setPassword('')
        setCPassword('')
        console.log("change password successful", response.data)

      }catch(e){
        console.log("Error during change password",e)

      }

    }

    
  
 
  
  
  return (
    <>
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
