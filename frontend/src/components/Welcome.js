import React,{useState,useEffect}from 'react'

export default function Welcome() {
    const [isAuth,setIsAuth] = useState(false);

    useEffect(()=>{
      if(localStorage.getItem('access_token')!==null){
        setIsAuth(true);
      }
    },[isAuth])
  return (
    <>
    <div className="container">
    <h1>Welcome to my site</h1>
    <h2>Please {isAuth? <p>visit homepage</p>:<p>authenticate</p>} to access system</h2>

    </div>
    
    </>
  )
}
