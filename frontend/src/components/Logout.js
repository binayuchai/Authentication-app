import React, { useEffect } from 'react'
import axios from "axios"
export default function Logout() {
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.post("http://localhost:8000/api/logout/",{refresh_token:localStorage.getItem('refresh_token')},{
                    headers:{
                        'Content-Type':'application/json',
                        
                    }},{withCredentials:true})
                    localStorage.clear();
                    axios.defaults.headers.common['Authorization'] = null;
                    window.location.href='/'
            }catch(e){
                console.log('logout is not working ',e)

            }
    
    
    
    
        })();


    },[])
  return (
    <>
    
    
    
    
    
    </>
  )
}
