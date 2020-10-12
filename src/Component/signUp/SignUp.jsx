import React, { Component } from 'react';

import './SignUpStyle.css'

class SignUp extends Component{
  render() {
      return(
            <div className="SignUp-parent">
                <div className="Signup-name">
                    <h1 className="title-login"style={{color:'white'}}>Welcome !
                    <button type="submit" className="btn fb">Log in with Facebook</button>
                    </h1>
                </div>
                <div className="Signup-form"> 
                
        <form>
        <div className="form-group">
        <label htmlFor="formGroupExampleInput">User Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
      </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
        </div>
        {/* <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-signup">Sign Up</button>
      </form></div>
                
           </div>
      )
   } 
}

export default SignUp;