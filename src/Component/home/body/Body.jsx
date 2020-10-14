import React, { Component } from 'react';
import './body.css'

export default class Body extends Component {
    render() {
        return (
           <div>
            <div className="container">

                <h1 className="login">
                    <span>Login</span>
                </h1>
<br/>
<div className="inputField "> 


                <label >UserName</label>
                <input type="UserName" placeholder="userName"/>

                <label >Password</label>
                <input type="password" placeholder="Password"/>


                <button className="loginBtn">Login</button>

</div>
               





                


            </div>

            </div>
        );
    }
}


