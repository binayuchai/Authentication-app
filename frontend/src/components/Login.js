import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div className="container">
    <div>Login</div>
    <form>
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <Link to={"#"}>Forgot password?</Link>
    </div>
  </div>

  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to={"/register/"}>Register</Link></p>

  </div>
</form>




    </div>
        
    
    </>
  )
}
