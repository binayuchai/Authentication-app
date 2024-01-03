import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isAuth,setIsAuth] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('access_token')!==null){
      setIsAuth(true);
    }
  },[isAuth])

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"home/"}>Home</Link>
        </li>
        {/**
       {isAuth? <li className="nav-item">
           <Link className="nav-link" to={"/"}>Login</Link>
        </li> :null}
  **/}


      {isAuth? <li className="nav-item">
        <Link className="nav-link" to={"register/"}>Signup</Link>
        </li>:null}

       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    
    
    </>

    )
}
