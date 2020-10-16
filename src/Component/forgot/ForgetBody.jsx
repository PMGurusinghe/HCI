import React, { Component } from "react";
import "./forgetBody.css";
class ForgetBody extends Component {
  render() {
    return (
      <div>
        <div className="containerBorder mx-auto mt-5 mb-5">
            <h1>Forget Your Password?</h1>
            <div className='text-center'>
            <p className="para text-start mr-5">Please Enter your Email address <br/> we'll send a new Password for you</p>
            </div>
      
                <div className="containerBorder2" style={{'margin-top':'-30px'}}>
                <input className="EnterEmail" type="Email" placeholder="Email"/>
                </div>
                
                <button className="BackButton ">Back</button>

        </div>
      </div>
    );
  }
}

export default ForgetBody;
