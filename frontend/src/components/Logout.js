import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from "axios"
export default function Logout() {
    let navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            try{
                const data=await axios.post("http://localhost:8000/api/logout/",{refresh_token:localStorage.getItem('refresh_token')},{
                    headers:{
                        'Content-Type':'application/json',
                        
                    }},{withCredentials:true})
                    localStorage.clear();
                    axios.defaults.headers.common['Authorization'] = null;
                    navigate('/')
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
