import React, { Component } from "react";
import "./forgetBody.css";
class ForgetBody extends Component {
  render() {
    return (
      <div>
        <div className="containerBorder">
            <h1>Forget Your Password?</h1>
                <h2 className="para">Please Enter your Email address and we'll send a new Password for you</h2>

                <div className="containerBorder2">
                <input className="EnterEmail" type="Email" placeholder="Email"/>
                </div>
                
                <button className="BackButton ">Back</button>

        </div>
      </div>
    );
  }
}

export default ForgetBody;
