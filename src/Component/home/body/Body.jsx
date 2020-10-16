import React, { Component } from 'react';
import './body.css'

class Body extends Component {
    render() {
        return (
           <div>
            <div className="container12">

                <h1 className="login">
                    <span>Login</span>
                </h1>
<br/>
<div className="inputField "> 


                <label >UserName</label>
                <input type="UserName" placeholder="userName"/>

                <label >Password</label>
                <input type="password" placeholder="Password"/>


                <button className="loginBtn mt-5">Login</button>
       
      <a href="/forgot" class="text-dark">Forget Password?</a>
      <h5>New to Vikka.lk</h5>
      <a href="/sign" class="text-dark ">Sign Up?</a>
</div>
               





                


            </div>

            </div>
        );
    }
}

export default Body;
